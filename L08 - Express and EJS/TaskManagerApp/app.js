// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));

// Temporary in-memory storage for tasks
const tasks = [];

// Home route
app.get('/', (req, res) => {
  res.render('index', { name: 'Peter', age: 35 });
});

// Add Task page
app.get('/taskDetails', (req, res) => {
  res.render('taskDetails');
});

// Handle new task submission
app.post('/confirm', (req, res) => {
  const { title, description, deadline, priority } = req.body;
  tasks.push({ title, description, deadline, priority });
  res.render('confirm', { title, description, deadline, priority });
});

// Show all tasks (Task Done page)
app.get('/taskdone', (req, res) => {
  res.render('taskdone', { tasks });
});
// Contact page
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Handle contact form submission
app.post('/submit', (req, res) => {
  const { name, email, contact, comments } = req.body;
  res.render('submitted', { name, email, contact, comments });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
