const express = require("express");
const path = require("path");
const bcrypt =require("bcrypt");
const User = require("./config");
// const bodyParser = require("body-parser");

const app = express();

//convert data into json format
app.use(express.json());

// use EJS as a view engine
app.set('view engine', 'ejs');

// static folder
app.use(express.static("public"));

// middleware to parse request body
//app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.urlencoded({extended: false}));

// login user
app.get("/login", (req, res) => {
    res.render("login")
});

// signup if not existing user
app.get("/signup", (req, res) => {
    res.render("signup")
});


// register User
app.post("/signup", async (req, res) => {

    try {
        //extracting data from the req.body
        const { username, email, phone, password } = req.body;

        console.log("Received data:", { username, email, phone, password });

        // check if the user already exists
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).send("User already exist with this email, try with another email !");
        }

        // Hash the password before saving
        const hashPassword = await bcrypt.hash(password, 10);

        // create a new user document
        const newUser = new User({
            name: username,
            email: email,
            phone: phone,
            password: hashPassword
        });

        // save the user to the database
        await newUser.save();

        // redirect or respond after successful signup
        res.status(200).send("User registered successfully!");

    } catch (error) {
        console.error("Error during dignup", error);
        res.send(500).send("Internal Server Error");
    }
});


// Login User post method
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by name
        const user = await User.findOne({ name: username });

        if (!user) {
            return res.status(400).send("User not found. Please sign up.");
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send("Incorrect password. Please try again.");
        }

        // Login successful
        res.status(200).send("Login successful!");
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal Server Error");
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
