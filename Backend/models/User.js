import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = mongoose.Schema({
    fullname: { type: String , required: true },
    email: { type: String , required: true , unique: true },
    password: { type: String , required: true },
});

// Create the model from the schema and export it
const User = mongoose.model("User", userSchema);
export default User;