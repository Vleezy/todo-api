// pull express
const express = require('express');

// api
const api = express();
api.use(express.static(__dirname + '/public'));

api.listen(3000, () => {
  console.log('API up and running!');
});

// route - endpoints
// api.get('/', (req, res) => {
//     console.log(req);
//     res.send('Hello, world!');
//   });

//   middleware use
//   api.use((req, res, next) => {
//     console.log('Hello');
//     next();
//    });

