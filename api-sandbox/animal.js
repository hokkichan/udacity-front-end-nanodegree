const data = [];

app.post('/animal', addAnimal);

function addAnimal (req,res){
    data.push(req.body);
};

//or

//...projectData = [];
//app.post('/add', function(request, response){
//  // Your code goes here   
//}) 
//projectData.push(request.body);