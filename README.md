# User Authentication System

This project is a simple User Authentication System built with Node.js and Express. It allows users to register and log in securely, utilizing MongoDB for data storage. The application provides a user-friendly interface using EJS templates, ensuring a seamless experience for users.



## Features

* User Signup: New users can create an account by providing their name and password. Passwords are securely hashed using bcrypt to ensure safety.
  
* User Login: Existing users can log in with their registered credentials.
  
* MongoDB Integration: User data is stored in a MongoDB database, allowing for efficient data management and retrieval.
  
* Responsive Design: The application features a responsive layout, making it accessible across various devices.
  
* Easy to Customize: The code is modular and easy to extend, allowing for future enhancements such as email verification and password recovery.



## Tech Stack

* Node.js: JavaScript runtime for building server-side applications.
* Express.js: Web application framework for Node.js, providing robust features for web and mobile applications.
* MongoDB: NoSQL database used for storing user data.
* EJS: Templating engine for rendering dynamic HTML pages.
* bcrypt: Library for hashing passwords for secure storage.



## Installation

1. Clone the repository:
  git clone https://github.com/yourusername/user-authentication-system.git

2. Navigate to the project directory:
  cd user-authentication-system

3. Install the required packages:
  npm install

4. Start your MongoDB server (if not already running).

5. Run the application:
  node index.js  OR nodemon src/index.js

6. Open your browser and visit http://localhost:3000 to access the application.

 

## Usage
* Signup: Go to /signup to create a new user account.
* Login: Go to /login to log in with your credentials.


  
## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request with your changes.



## License
This project is licensed under the MIT License. See the LICENSE file for more details.
