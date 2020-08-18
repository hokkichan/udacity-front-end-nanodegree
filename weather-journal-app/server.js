// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

//Get route
app.get ('/allData', (req, res) => {
    res.send(projectData);
    console.log(projectData);
});

//Post route
const data = [];

app.post('/addData', (req, res) => {
    console.log(req.body);
    const newEntry = {
      temp: req.body.temp,
      date: req.body.date,
      content: req.body.content
    }
    projectData = newEntry;
    res.send(projectData);
    console.log(projectData);
});

// Setup Server

const port = 8000;
const server = app.listen(port, listening);

function listening() {
  console.log(`running on localhost: ${port}`);
};