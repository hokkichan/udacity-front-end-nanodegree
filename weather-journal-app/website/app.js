/* Global Variables */
//let baseURL ="api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}"
let baseURL ="api.openweathermap.org/data/2.5/weather?zip=98101&appid="
let apiKey = "c02dfeec9e7239aa6b0362b7add9d80c";

//Event listener
document.getElementById("generate").addEventListener('click', performAction);


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//
function performAction(e){
const newZip = document.getElementById('zip').value;
getAnimal(baseURL,newAnimal, apiKey)

}
const getAnimal = async (baseURL, animal, key)=>{

  const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

//Post data

const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(projectData), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

postData('/add', {answer:42});