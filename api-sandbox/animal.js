const data = [];

app.post('/animal', addAnimal);

function addAnimal (req,res){
    data.push(req.body);
};