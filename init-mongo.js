const { decodeBase64 } = require("bcryptjs");

import {} from 'mongoose';

db.createUser({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    roles: [{
        role: 'read write',
        db: process.env.MONGO_URI
    }]
})