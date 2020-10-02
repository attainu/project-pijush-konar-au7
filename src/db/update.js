import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));