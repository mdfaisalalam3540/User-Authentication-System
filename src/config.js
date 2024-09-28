const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Login-tut");

//check database connected or not
connect.then( () => {
    console.log("Database connected Successfully");
})
.catch( ()=> {
    console.log("Database cannot be connected");
})


// Create a user schema for login and signup
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
        match: /.+\@.+\..+/ // Simple regex to validate email format
    },
    phone: {
        type: String,
        required: true,
        unique: true, // Ensure phone number is unique
        match: /^\d{10}$/ // Simple regex to validate 10-digit phone number
    },
    password: {
        type: String,
        required: true
    }
});

// create a model for the user collection
const User = new mongoose.model("user_info", userSchema);

// export the user model
module.exports = User;