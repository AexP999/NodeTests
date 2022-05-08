const express = require('express');
const path = require('path');

const appp = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

appp.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});

appp.get('/', (req, res) => {
  res.sendFile(createPath('index'));
});

appp.get('/contacts', (req, res) => {
  res.sendFile(createPath('contacts'));
});

appp.get('/about-us', (req, res) => {
  res.redirect('/contacts');
});

appp.use((req, res) => {
  res.status(404).sendFile(createPath('error'));
});
