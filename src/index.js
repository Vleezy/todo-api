// pull express
const express = require('express');
const bodyParser = require('body-parser');


// api
const api = express();
api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());

api.listen(3000, () => {
  console.log('API up and running!');
});



// route - endpoints
// api.get('/', (req, res) => {
//     console.log(req);
//     res.send('Hello, world!');
//   });

// post route api
api.post('/add', (req, res) => {
    console.log(req.body);
    res.send('It works!');
   });

//   middleware use
//   api.use((req, res, next) => {
//     console.log('Hello');
//     next();
//    });

