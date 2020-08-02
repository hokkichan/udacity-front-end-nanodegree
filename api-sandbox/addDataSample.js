const data = [{animal:"elephant", score: 10},{animal:"kangaroo",score:3}]

function makeData(request){

}

makeData({body:{animal:"turtle", score:7}})

//fetch data
let newData = request.body;
let newEntry = {
	animal: newData.animal,
	score: newData.score
	}
data.push(newEntry)