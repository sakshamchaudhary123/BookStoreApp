import User from "../models/User.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
    try {
      const { fullname, email, password } = req.body;
  
      // Validate input
      if (!fullname || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Check if user already exists
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const createdUser = new User({
        fullname,
        email,
        password: hashedPassword,
      });
  
      // Save the user and handle potential errors
      await createdUser.save();
      res.status(201).json({
        message: "User created successfully",
        user: {
          _id: createdUser._id,
          fullname: createdUser.fullname,
          email: createdUser.email,
        },
      });
    } catch (error) {
      // Log the error message for debugging
      console.log("Error: ", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Attempt to find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" }); // User not found
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" }); // Password does not match
    }

    // If both checks pass, respond with success
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default { signup, login };
