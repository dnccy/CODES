const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Sample arrays
const clothesList = ['T-shirts', 'Jacket', 'Jeans'];
const toiletriesList = ['Toothbrush', 'Shampoo', 'Sunscreen'];

// GET route to render the page
app.get('/', (req, res) => {
  res.render('index', { clothesList, toiletriesList });
});

// POST route to handle form submission
app.post('/addItem', (req, res) => {
  const { item, category } = req.body;
  if (category === 'clothes') {
    clothesList.push(item);
  } else {
    toiletriesList.push(item);
  }
  res.redirect('/');
});


// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
