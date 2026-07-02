const http = require('http');
const server = http.createServer((req, res) =>{
    res.write('<h1>Welcome to my first NodeJS Page!</h1><br>');
    res.write('<b>Name:</b> Daniel Cheong <br>');
    res.write('<b>School:</b> Republic Polytechnic<br>');
    res.end('<b>Diploma:</b> Fiancial Technology<br>');
});
const PORT = 3000;
server.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}/`); });
