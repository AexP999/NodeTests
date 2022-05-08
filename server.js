const express = require('express');

const appp = express();

const PORT = 3000;

appp.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});

appp.get('/', (req, res) => {
  res.send('<h1>Hi</h1>');
});
