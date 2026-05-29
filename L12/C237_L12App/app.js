// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));

// In-memory array to store habits
let habits = [];
let nextId = 1;

// GET - Home page
app.get('/', (req, res) => {
    res.render('index');
});

// GET - Add habit form
app.get('/add', (req, res) => {
    res.render('add');
});

// POST - Handle add habit form submission
app.post('/add', (req, res) => {
    const { name } = req.body;
    const newHabit = { id: nextId++, name: name, done: false };
    habits.push(newHabit);
    res.render('confirm', { habitName: name });
});

// GET - View all habits
app.get('/habits', (req, res) => {
    res.render('habits', { habits: habits });
});

// POST - Mark habit as done
app.post('/done/:id', (req, res) => {
    const habit = habits.find(h => h.id === parseInt(req.params.id));
    if (habit) {
        habit.done = true;
    }
    res.redirect('/habits');
});

// POST - Delete a habit
app.post('/delete/:id', (req, res) => {
    habits = habits.filter(h => h.id !== parseInt(req.params.id));
    res.redirect('/habits');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});