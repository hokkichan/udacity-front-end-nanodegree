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
//app.get('/all', sendData);
//
//function sendData (request, response) {
//  response.send(projectData);
//};

const fakeData = {
	animal: 'lion',
	fact: 'lions are fun'
}

app.get('/fakeAnimalData', getFakeData)

function getFakeData(req,res){
  res.send(fakeData)
}

// POST route
//app.post('/add', callBack);

function callBack(req,res){
  res.send('POST received');
}

//POST an animal
//const data = [];
const animalData = [];

//app.post('/animal', addAnimal);
app.get('/all', getData)

//function addAnimal (req,res){
//    data.push(req.body);
//};

function getData(req,res){
  req.send(animalData)
  console.log(animalData)
}

//Post

app.post('/addAnimal', addAnimal);

function addAnimal(req,res){
  console.log(req.body)

  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }

  animalData.push(newEntry)
  res.send(animalData)
  console.log(animalData)
}