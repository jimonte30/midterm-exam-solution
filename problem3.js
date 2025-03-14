const express = require('express'); // Import the express library
const app = express();  // Create an express app
const port = 3000; // Declaring the Port number for the server

// Define the /test route
app.get('/test', (req, res) => {
    // Send a JSON response with a message
    res.json({ message: 'Express is working! Jherick Isaiah F. Montemar' }); 
});

// Start the server
app.listen(port, () => {
    // Message of determining if the server is running. 
    console.log(`Server is running on http://localhost:${port}`); 
});
