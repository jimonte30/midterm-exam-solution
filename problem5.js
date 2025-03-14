const express = require('express'); // Import the express library
const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize and DataTypes from sequelize
const fs = require('fs');
const app = express(); // Create an express app
const port = 3000; // Declaring the Port number for the server

// Setup Sequelize to use SQLite
const dbPath = './database.db'; 

// Check if the database file exists, if not create it
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, ''); // Create an empty file
}

const sequelize = new Sequelize({
    dialect: 'sqlite', // Use the SQLite database engine
    storage: dbPath  // Save the database to a file named database.db
});

// Define the User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER, // Define the id data type as INTEGER
        primaryKey: true,// Define the primary key
        autoIncrement: true,    // Automatically increment the value
    },
    name: {
        type: DataTypes.STRING, // Define the name data type as STRING
        allowNull: false, // The name cannot be null
    },
    email: {
        type: DataTypes.STRING, // Define the data type as STRING
        allowNull: false, // Declaring the email to not be null
    },
    status: {
        type: DataTypes.STRING, // Define the status data type as STRING
        allowNull: false, // Declaring the status to not be null
    },
});

// Route to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll(); // Fetch all users from the database
        res.json(users); // Send the users as a JSON response
    } catch (error) {
        res.status(500).send('Error retrieving users'); // Send an error response if there is an issue
    }
});

// Sync database and start server
sequelize.sync().then(() => {
    // Start the server
    app.listen(port, () => {
        // Log the message
        console.log("Server is running on http://localhost:" + port + "."); 
    });
});
