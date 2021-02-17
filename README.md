# GuruKul Application

A Peer to peer educational website.
The objective of this website/project is to provide a social platform to students and teachers from any university to Join As a Student or Teacher where they can teach or learn from one of the Teacher. 

---

## Live Website & Video Demo
[GuruKul World](https://gurukul-world.herokuapp.com/)

[GuruKul Demo Video](https://youtu.be/AiO7LlU-_OU)

---

# Project Authors

#### Check Us Out

👤 **Pijush Konar**

- Github: [@pijushkonar](https://github.com/pijushkonar)

👤 **Saidul Mondal**

- Github: [@saidul-mondal-au7](https://github.com/saidul-mondal-au7)

---

## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

---

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

```
    $ node -v
    v12.16.2

    $ npm -v
    6.14.4
```
---

## Project Installation
  **After installing node, this project will need many NPM Packages, so just run the following command to install all the dependencies.**
```
$ git clone Here(https://github.com/attainu/project-pijush-konar-au7)
$ cd project-pijush-konar-au7
```   
**Run npm install at app root**
```
$ npm i
```
**Then install the React App Dependencies within the /client folder -**
```
$ npm i 
```
---

## Configuration for the App

Open `project-pijush-konar-au7` then create and **dev.env** file in the root and edit it with your credentials. You will need:

- PORT=`Your Desired Port`
- MONGODB_URI=`Your Database Address`
- SENDGRID_KEY=`Enter Your SendGrid Email API Register On Sendgrid`
- SESSION_SECRET=`your secret key`
- SECRET_OR_KEY=`KEY`
- NODE_ENV=`production`
---

## Running The Project

```sh
    $ npm run dev
```

## Running The Tests

```sh
    $ npm run cover
```

## Full Project Website Link Hosted On Heroku -

- #### Visit Here [GuruKul World](https://gurukul-world.herokuapp.com/)

## Project BackEnd Hosted On Heroku -

- #### Visit Here [BackEnd Hosted By Pijush](https://tutionapp.herokuapp.com/)
- #### Visit Here [BackEnd Hosted By Saidul](https://tution-media.herokuapp.com/)



## BackEnd NPM Packages Used -

- ##### `@sendgrid/mail` - It’s Mail Service npm for the SendGrid v3 Web Email API. We used it to send signup emails and account deletion emails to the users. You can find it out here - [@sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail)


- ##### `@material-ui/core` - For designing system. You can find it out here - [@material-ui/core](https://www.npmjs.com/package/@material-ui/core).


- ##### `bcryptjs` - We are using bcrypt.js module to hash password of the user. It’s an npm module that you can find it out here at [bcryptjs](https://www.npmjs.com/package/bcryptjs).


- ##### `body-parser` - It’s a Node.js body parsing middleware for accessing data. You can find it out here - [body-parser](https://www.npmjs.com/package/body-parser).


- ##### `compression` - It’s a compression middleware we used for GZip Compression. Check it out here - [compression](https://www.npmjs.com/package/compression). 


- ##### `concurrently` - It is used to run multiple commands concurrently. Check it out here - [concurrently](https://www.npmjs.com/package/concurrently).


- ##### `cors` - It is used as a middleware in Node.JS. Check it out here - [cors](https://www.npmjs.com/package/cors). 


- ##### `dotenv` - It is used to load environment variables from a .env file into process.env. You can find it out here - [dotenv](https://www.npmjs.com/package/dotenv).


- ##### `express` - It's the web framework for Node.js that we used to structure our web application. You can find more details here [express](https://www.npmjs.com/package/express).

- ##### `express-session` - It's for the storage of the cookies. Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side. For more details check here - [express-session](https://www.npmjs.com/package/express-session).


- ##### `helmet` - It helps to secure our Express app by setting various HTTP headers. For more details check here - [helmet](https://www.npmjs.com/package/helmet).


- ##### `heroku-logger` -  We used this for Heroku. For more details check here - [heroku-logger](https://www.npmjs.com/package/heroku-logger). 


- ##### `jsonwebtoken` - We used to create access tokens for our application. For more details check here - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken). 


- ##### `memorystore` - It helps for session store implementation for Express. For more details check here - [memorystore](https://www.npmjs.com/package/memorystore).


- ##### `mongoose` - We used Mongoose because it provides a schema-based solution to model our application data with MongoDB. Which has many features to use example - validation of user's data. For more details check here - [mongoose](https://www.npmjs.com/package/mongoose).


- ##### `morgan` - HTTP request logger middleware for node.js. For more details check here - [morgan](https://www.npmjs.com/package/morgan).


- ##### `passport` - We have used Passport for authentication as it is one of the best authentication middleware available for Node.js. For more details check here - [passport](https://www.npmjs.com/package/passport).


- ##### `passport-jwt` - It used for for authenticating with our app JSON Web Token. For more details check here - [passport-jwt](https://www.npmjs.com/package/passport-jwt).


- ##### `sinon` - For testing. For more details check here - [sinon](https://www.npmjs.com/package/sinon).


- ##### `validator` - We used validator to validate user data for example - user's entered email address. For more details check here - [validator](https://www.npmjs.com/package/validator).


---


## FrontEnd NPM Packages Used -

- ##### `React` -  For the full frontend we used react with CRA. Check it out here [React](https://www.npmjs.com/package/react).


- ##### `@material-ui/core` - For Material UI react component design system. You can find it out here - [@material-ui/core](https://www.npmjs.com/package/@material-ui/core).


- ##### `axios` - Promise based HTTP client for the browser. For more details check here - [axios](https://www.npmjs.com/package/axios).


- ##### `classnames` - Used for joining classNames together. For more details check here - [classnames](https://www.npmjs.com/package/classnames).


- ##### `jwt-decode` - We used it  in our utils, actions and files for decoding JWTs. Check it out here - [jwt-decode](https://www.npmjs.com/package/jwt-decode).


- ##### `lodash` - We used lodash for our filter, sorting options and others. For more details check here - [lodash](https://www.npmjs.com/package/lodash).


- ##### `redux-thunk` - Middleware for redux. For more details - [redux-thunk](https://www.npmjs.com/package/redux-thunk).

---


## Project Screenshots

- ##### Welcome Page/Landing Page
 ![](/demoPictures/1-welcome.png) 

- ##### Signup Page
 ![](/demoPictures/2-register.png) 

- ##### Login Page
 ![](/demoPictures/3-login.png) 

- ##### Dashboard
 ![](/demoPictures/4-dashboard.png) 

- ##### Create Guru Profile Page
 ![](/demoPictures/5-CGP.png) 

- ##### Guru Dashboard Page
 ![](/demoPictures/6-guruDashboard.png)

- ##### Edit Guru Profile Page
 ![](/demoPictures/7-editProfile.png) 

- ##### View Guru Profile Page
 ![](/demoPictures/8-viewProfile.png)

- ##### Find A Guru Page
 ![](/demoPictures/9-findGuru.png) 

- ##### About GuruKul Page
 ![](/demoPictures/14-About.png)

---

- ##### Subjects Admin Page (Admin Tools)
 ![](/demoPictures/10-subjectsAdmin.png)

 - ##### View Subjects (Admin Tools)
 ![](/demoPictures/11-viewSubAdmin.png)

 - ##### Create & Edit Subjects (Admin Tools)
 ![](/demoPictures/12-createEditSubAdmin.png)

 - ##### Manage Profiles/Users (Admin Tools)
 ![](/demoPictures/13-manageUser.png)


 

 ## 📝 License

Copyright © 2020 [Pijush Konar](https://github.com/pijushkonar) & [Saidul Mondal](https://github.com/saidul-mondal-au7).

---
