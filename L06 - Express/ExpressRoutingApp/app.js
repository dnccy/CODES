const express = require('express');
const app = express();
const port = 3000;

let books = [
    { id: 1, title: 'Book A', author: 'Peter Tan' },
    { id: 2, title: 'Book B', author: 'Mary Lee' },
    { id: 3, title: 'Book C', author: 'Sam Ho' }
];


// Function to generate the book list HTML
function generateBookList() {
    return books.map(book =>
        `<li>${book.title} (Author: ${book.author})</li>`
    ).join('');
}

// Homepage route
app.get('/', (req, res) => {
    res.send(`<h1>Book List</h1><ul>${generateBookList()}</ul>`);
});

// /books route (optional, same output)
app.get('/books', (req, res) => {
    res.send(`<h1>Book List</h1><ul>${generateBookList()}</ul>`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
