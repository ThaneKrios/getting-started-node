const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server  = http.createServer((req, resr) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola, El servidor esta corriendo');
});

server.listen(port, hostname, () => {
    console.log(`Server corriendo en: http://${hostname}:${port}/`); 
  })