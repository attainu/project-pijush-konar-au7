import express from 'express';
import passport from 'passport';

// Load controllers
import coursesControll from '../controllers/courseController'

const router = express.Router();

<<<<<<< HEAD
// @route   POST courses/
=======
// @route   POST /course
>>>>>>> cc2c40cdeae7b5f398e9c7703167c039e9983b0a
// @desc    Create or edit a course on a profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), coursesControll.postCourse);

<<<<<<< HEAD
// @route   GET courses/
=======
// @route   GET /courses
>>>>>>> cc2c40cdeae7b5f398e9c7703167c039e9983b0a
// @desc    Get all courses for current logged in user
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), coursesControll.getCourse);

<<<<<<< HEAD
// @route   DELETE courses/
=======
// @route   DELETE /course
>>>>>>> cc2c40cdeae7b5f398e9c7703167c039e9983b0a
// @desc    Delete course from user profile
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }), coursesControll.deleteCourse);

module.exports = router;