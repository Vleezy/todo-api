// pull express
const express = require('express');

// api
const api = express();
api.listen(3000, () => {
  console.log('API up and running!');
});

// route - endpoints
api.get('/', (req, res) => {
    console.log(req);
    res.send('Hello, world!');
  });