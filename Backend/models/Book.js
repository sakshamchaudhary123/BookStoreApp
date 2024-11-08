import mongoose from 'mongoose';

// Define the schema for the Book model
const bookSchema = new mongoose.Schema({
        name: { type : String },
        title: { type : String },
        price: { type : Number },
        category: { type : String },
        Image: { type : String },
        chreatedAt: { type : Date, default: Date.now }
});

// Create the model from the schema and export it
const Book = mongoose.model('Book', bookSchema);
export default Book;