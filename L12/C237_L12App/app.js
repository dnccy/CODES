// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));

// In-memory array to store tasks
let tasks = [];
let nextId = 1;

// GET - Home page: display all tasks
app.get('/', (req, res) => {
    res.render('index', { tasks: tasks });
});

// GET - Add task form
app.get('/add', (req, res) => {
    res.render('add');
});

// POST - Handle add task form submission
app.post('/add', (req, res) => {
    const { title, description } = req.body;
    tasks.push({ id: nextId++, title: title, description: description, done: false });
    res.redirect('/');
});

// GET - Edit task form
app.get('/edit/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.redirect('/');
    res.render('edit', { task: task });
});

// POST - Handle edit task form submission
app.post('/edit/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (task) {
        task.title = req.body.title;
        task.description = req.body.description;
    }
    res.redirect('/');
});

// POST - Delete a task
app.post('/delete/:id', (req, res) => {
    tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
    res.redirect('/');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});