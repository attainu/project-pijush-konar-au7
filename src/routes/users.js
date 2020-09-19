import express from 'express';
import setting from '../../config/checkProd';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import keys from '../../config/keys';
import passport from 'passport';

// Load email confirmation functions
import sendEmail from '../email/email.send';
import msgs from '../email/email.msgs';
import templates from '../email/email.templates';


// Load Validation
import validateRegisterInput from '../validation/registerAuth';
import validateLoginInput from '../validation/loginAuth';

// Load User model
import User from '../models/User';

const router = express.Router();
// @route   POST api/users/register
// @desc    Register User
// @access  Public
router.post('/register', async (req, res, next) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) return res.status(400).json(errors);

    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
        }

        // New user
        else {
            const newUser = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password
            });

            if (!setting.isProduction) {
                newUser.confirmed = true
            }

            // Generate hashed password
            bcrypt.genSalt(parseInt(keys.saltRounds), (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.error(err));
                });
            });

            if (setting.isProduction) {
                sendEmail(newUser.email, templates.confirm(newUser._id));
            }
        }
    }
    catch (err) {
        console.error(err);
    }
});

// @route   POST users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', async (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    
    // Check Validation
    if (!isValid) return res.status(400).json(errors);
    
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            errors.email = 'User not found';
            return res.status(404).json(errors);
        }

        if (!user.confirmed) {
            errors.email = 'User has not confirmed email address';
            return res.status(404).json(errors);
        }
        
        // Check password
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if (isMatch) {
                // User Matched
                const payload = { id: user.id, 
                                firstname: user.firstname,
                                lastname: user.lastname,
                                isAdmin: user.isAdmin,
                                email: user.email,
                                confirmed: user.confirmed
                            }; // Create JWT Payload
                
                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        if (err) console.error(err);
                        res.json({
                            success: true,
                            token: `Bearer ${token}`
                        });
                    }
                );
            }
            else {
                errors.password = 'Incorrect password';
                return res.status(404).json(errors);
            }

        })
        .catch(err => console.error(`Password not authenticated by bcrypt login: ${err}`));
    }
    catch(err) {
        console.error(err);
    }
});

// @route   GET users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
   res.json({
       id: req.user.id,
       firstname: req.user.firstname,
       lastname: req.user.lastname,
       email: req.user.email,
       isAdmin: req.user.isAdmin
   }); 
});

// @route   POST users/admin
// @desc    Updates the isAdmin property
// @access  Private
router.post('/admin', passport.authenticate('jwt', { session: false}), (req, res) => {
    User.findOne({ _id: req.body.adminProps.id }).then(user => {
        if (user) {
            // Update user
            User.findOneAndUpdate(
                { _id: req.body.adminProps.id },
                { $set: {isAdmin: req.body.adminProps.isAdmin} },
                { new: true }
            ).then(user => res.json(user));
        }
    });
});


module.exports = router;
