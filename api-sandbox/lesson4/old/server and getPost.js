//server.js

/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// GET route
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};

// POST route
app.post('/add', callBack);

function callBack(req,res){
  res.send('POST received');
}

// POST an animal
const data = [];

app.post('/animal', addAnimal);

function addAnimal (req,res){
    data.push(req.body);
};

//====getPost.js



// Async POST
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData
    }catch(error) {
    console.log("error", error);
    }
}

// TODO-Async GET
const retrieveData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}