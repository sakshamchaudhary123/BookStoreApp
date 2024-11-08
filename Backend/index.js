import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();

app.use(cors());
// parse the request body
app.use(express.json());

import bookRoute from './routes/book.js';
import userRoute from './routes/user.js';

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to database (MongoDB)
try{
    mongoose.connect(URI)
    console.log("Connected to MongoDB");
}catch(err){
    console.log("Error: ",err);
}

// Defining the routes
app.use('/book', bookRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})