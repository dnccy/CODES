const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'RP738964$',
    database: 'c237_studentlistapp'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Display all students
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM student';
    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Database query error:', error.message);
            return res.send('Error Retrieving students');
        }
        res.render('index', { students: results });
    });
});

// Show add student form
app.get('/addStudent', (req, res) => {
    res.render('addStudent');
});

// Add student to database
app.post('/addStudent', (req, res) => {
    const { name, course, email } = req.body;
    const sql = 'INSERT INTO student (name, course, email) VALUES (?, ?, ?)';
    connection.query(sql, [name, course, email], (error, results) => {
        if (error) {
            console.error('Error adding student:', error);
            return res.send('Error adding student');
        }
        res.redirect('/');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));