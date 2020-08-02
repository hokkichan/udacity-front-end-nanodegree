//postData('/add', {answer:42})

app.post('/add', function (request, response) {
    let data = request.body; //use request.body to fetch data
    //let data = request.body; projectData["intelligence"]= data.intelligence;
    console.log(data);
});