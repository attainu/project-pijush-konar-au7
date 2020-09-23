# GuruKul App

The objective of this website/project is to provide a social platform to students and teachers from any university to Join As a Student or Teacher where they can teach or learn from one of the Teacher. 

---

# Project Authors

#### Check Us Out

👤 **Pijush Konar**

- Github: [@pijush-konar-au7](https://github.com/pijush-konar-au7)

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
  After installing node, this project will need many NPM Packages, so just run the following command to install all.

    $ git clone Here(https://github.com/attainu/project-pijush-konar-au7)
    $ cd project-pijush-konar-au7
    $ npm i

---

## Configuration

Open `project-pijush-konar-au7` then create and dev.env file and edit it with your infos. You will need:

- PORT=`Your Desired Port`
- MONGODB_URL_SET=`Your Database Address`
- SENDGRID_KEY=`Enter Your SendGrid Email API Register On Sendgrid`
- SESSION_SECRET=`your secret key`
- SECRET_OR_KEY=`KEY`
- NODE_ENV=`production`
---

## Running The Project

```sh
    $ npm run dev
```

## Running The Test

```sh
    $ npm run cover
```

## Project BackEnd Hosted On Heroku -

- #### Visit Here [BackEnd Hosted By Pijush](https://tutionapp.herokuapp.com/)
- #### Visit Here [BackEnd Hosted By Saidul](https://tution-media.herokuapp.com/)


## Full Project Website Link Hosted On Heroku -

- #### Visit Here [GuruKul](#)



## NPM Packages Used -

- ##### `@sendgrid/mail` - It’s Mail Service npm for the SendGrid v3 Web Email API. We used it to send signup emails and account deletion emails to the users. You can find it out here - [@sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail)


- ##### `bcryptjs` - We are using bcrypt.js module to hash password of the user. It’s an npm module that you can find it out here at [bcryptjs](https://www.npmjs.com/package/bcryptjs).


- ##### `express` - It's the web framework for Node.js that we used to structure our web application. You can find more details here [express](https://www.npmjs.com/package/express).


- ##### `express-session` - It's for the storage of the cookies. Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.  For more details check here [express-session](https://www.npmjs.com/package/express-session).


- ##### `mongoose` - We used Mongoose because it provides schema-based solution to model our application data with MongoDB. Which has many features to use example - validation of user's data. For more details check here [mongoose](https://www.npmjs.com/package/mongoose).


- ##### `passport` - We have used Passport for authentication as it is one of the best authentication middleware available for Node.js. For more details check here [passport](https://www.npmjs.com/package/passport).


- ##### `passport-jwt` - We used Passport-jwt. For more details check here [passport-jwt](https://www.npmjs.com/package/passport-jwt).


- ##### `validator` - We used validator to vadidate user data for example - user's entered email address. For more details check here [validator](https://www.npmjs.com/package/validator).

---


## Project Screenshots

- ###### Will Be Added
 ![](/Demo-Pictures/pic.jpg) 

 

 ## 📝 License

Copyright © 2020 [Pijush Konar](https://github.com/pijush-konar-au7) & [Saidul Mondal](https://github.com/saidul-mondal-au7).

---