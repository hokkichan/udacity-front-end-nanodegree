let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = '&appid=9f15e45060...';

const newAnimal =  document.getElementById('animal').value;

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){

getAnimal(baseURL,newAnimal, apiKey)

}

//Async function for get request/fetch request
const getAnimal = async (baseURL, animal, key)=>{

  //const res = await fetch(baseURL+animal+key)
  const res = await fetch('fakeAnimalData')
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}