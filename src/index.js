// pull express
const express = require('express');
const bodyParser = require('body-parser');
// mysql
const mysql = require('mysql2');

// connection to mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0223407Jv',
    database: 'todo' //dont have this yet
   });

//    red flag
   try {
    connection.connect();
   } catch (e) {
    console.log('Oops. Connection to MySQL failed.');
    console.log(e);
   }

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
    
    connection.query('INSERT INTO tasks (description) VALUES (?)', [req.body.item], (error, results) => {
     if (error) return res.json({ error: error });
   connection.query('SELECT LAST_INSERT_ID() FROM tasks', (error, results) => {
      if (error) return res.json({ error: error });
   console.log(results);
     });
    });
   });
//   middleware use
//   api.use((req, res, next) => {
//     console.log('Hello');
//     next();
//    });

