import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URL_SET, {
    useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));