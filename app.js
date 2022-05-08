const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request');
  console.log('Just for test');
  // console.log(req.url, req.method);

  res.setHeader('Content-Type', 'application/json');
  // res.setHeader('Content-Type', 'html');

  // res.write('<head><link rel= "stylesheet" href="#"></head>');

  // res.write('<h1>Hello</h1>');
  // res.write('<p>I am here</p>');

  const data = JSON.stringify([
    { name: 'Tom', age: 35 },
    { name: 'Art', age: 32 },
  ]);

  res.end(data);
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});
