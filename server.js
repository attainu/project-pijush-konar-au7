import compression from 'compression';
import express from 'express';
import session from 'express-session';
import memorystore from 'memorystore';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import passport from 'passport';
import path from 'path';
import mongoose from 'mongoose';
import keys from './config/keys'

// import { } from './src/db/keys';
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
// routes(app);
// Connect to DB
mongoose
    .connect(keys.mongoURI, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.info('MongoDB Connected'))
    .catch(err => console.error(err));

// Config express-session
const MemoryStore = memorystore(session)
const sessConfig = {
    secret: keys.sessionSecret,
    cookie: { secure: true },
    store: new MemoryStore({
        checkPeriod: 86400000 // prune expired entries every 24h
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

app.listen(port, () => console.info(`Server started on port ${port} & Prod setting is ${setting.isProduction}`));


//docker-compose up -d
//docker build . -t docker/getting-started
//docker build . -t docker/getting-started:latest
//docker run -d -p 80:80 docker/getting-started
//docker-compose up -d

// To check running ports
//netstat -ano | findstr :5000

// To kill running ports
//tskill 12345

// npm install -g create-react-app
// create-react-app my-app
// cd my-app
// git init
// heroku create -b https://github.com/mars/create-react-app-buildpack.git
// git add .
// git commit -m "react-create-app on Heroku"
// git push heroku master
// heroku open