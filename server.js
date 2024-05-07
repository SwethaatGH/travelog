const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const IP_ADDRESS = ''; // Use your machine's local IP address here
const PORT = 3000;
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define route to handle adding trips
app.post('/addtrip', (req, res) => {
  const { destn, origin, fromdate, todate } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      res.status(500).send('Error connecting to database');
      return;
    }

    connection.query('INSERT INTO triplist (destn, origin, fromdate, todate) VALUES (?, ?, ?, ?)', [destn, origin, fromdate, todate], (err, result) => {
      connection.release();
      if (err) {
        console.error('Error adding trip:', err);
        res.status(500).send('Error adding trip');
      } else {
        console.log('Trip added:', result);
        res.status(200).send('Trip added successfully');
      }
    });
  });
});

// Define route to fetch trips
app.get('/trips', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      res.status(500).send('Error connecting to database');
      return;
    }

    connection.query('SELECT origin, destn, fromdate, todate FROM triplist', (err, results) => {
      connection.release();
      if (err) {
        console.error('Error fetching trips:', err);
        res.status(500).send('Error fetching trips');
      } else {
        console.log('Trips fetched successfully');
        res.status(200).json(results);
      }
    });
  });
});


app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server is running on http://${IP_ADDRESS}:${PORT}`);
});