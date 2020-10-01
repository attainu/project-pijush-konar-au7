import mongoose from 'mongoose';
import keys from '../../config/keys'

//Db connection

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    // useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// mongoose.connect('mongodb://localhost:27017/tutor', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));

//+srv
