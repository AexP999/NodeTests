const express = require('express');
const path = require('path');

const appp = express();

appp.set('view engine', 'ejs');

const PORT = 3000;

const createPath = (page) =>
  path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

appp.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});

appp.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), { title });
});

appp.get('/contacts', (req, res) => {
  const title = 'Contacts';
  const contacts = [
    { name: 'YouTube', link: 'http://youtube.com/YauhenKavalchuk' },
    { name: 'Twitter', link: 'http://github.com/YauhenKavalchuk' },
    { name: 'GitHub', link: 'http://twitter.com/YauhenKavalchuk' },
  ];
  res.render(createPath('contacts'), { contacts, title });
});

appp.get('/posts/:id', (req, res) => {
  const title = 'Post';
  res.render(createPath('post'), { title });
});

appp.get('/posts', (req, res) => {
  const title = 'Posts';
  res.render(createPath('posts'), { title });
});

appp.get('/add-post', (req, res) => {
  const title = 'Add Post';
  res.render(createPath('add-post'), { title });
});

appp.use((req, res) => {
  const title = 'Error';
  res.status(404).sendFile(createPath('error'), { title });
});
