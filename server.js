import compression from 'compression';
import express from 'express';
import session from 'express-session';
import memorystore from 'memorystore';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import passport from 'passport';
import path from 'path';
import keys from './config/keys'

import { } from './src/db/keys';
import setting from './config/checkProd';

// Load routes
import users from './src/routes/users';
import profile from './src/routes/profile';
import courses from './src/routes/courses';
import subjects from './src/routes/subjects';

const app = express();
const port = process.env.PORT || 8080;

// Use GZip compression
app.use(compression());
app.use(cors());
app.use(helmet());
// app.use(express.cookieParser());

// Email confirmation
import emailController from './src/email/email.controller';

// Normal express middleware config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));  //false
app.use(bodyParser.json());
// app.use(express.session({ secret: process.env.secretOrKey }));

// Config express-session
const MemoryStore = memorystore(session)
const sessConfig = {
    secret: keys.sessionSecret,
    cookie: { secure: true },
    store: new MemoryStore({
        checkPeriod: 86400000 // Expired entries every 24hours
      }),
    resave: false,
    saveUninitialized: true
};

app.use(session(sessConfig));


// Passport Config
require('./config/userAuth')(passport);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session()); 

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/courses', courses);
app.use('/api/subjects', subjects);
app.get('/email/confirm/:id', emailController.confirmEmail);

if (setting.isProduction) {
    sessConfig.cookie.secure = true;

    //Set static folder
    app.use(express.static('./client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => console.info(`Server started on port ${port}`));

//node --unhandled-rejections=strict
//--trace-warnings
