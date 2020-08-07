let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = '&appid=9f15e45060...';

const newAnimal =  document.getElementById('animal').value;

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const fav =  document.getElementById('favorite').value;
  getAnimal('/fakeAnimalData')
  .then(function(data){
    //console.log(data);
    postData('/addAnimal', {animal: data.animal, fact: data.fact, fav:fav});
  });
};


//Async function for get request/fetch request
const getAnimal = async (url = '', data ={})=>{

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

const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }