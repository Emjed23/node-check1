// create a server  
// Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});