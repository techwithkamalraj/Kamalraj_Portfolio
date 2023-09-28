const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');


const app = express();

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234@1080',
    database: 'mydatabase' // Replace with your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to the database');
    }
});

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    res.sendFile(__dirname + '/index.css');
});

// Handle form submission
// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    const insertQuery = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';

    db.query(insertQuery, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.send('Error submitting the form.');
        } else {
            console.log('Data inserted into the database.');
            res.send('Form submitted successfully.');
        }
    });
});


const port = 3001; // Replace with your desired port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
