import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI, () => {
  mongoose.connection.db.dropDatabase()
    .then(() => process.exit())
});

console.log('GuruKul database dropped');