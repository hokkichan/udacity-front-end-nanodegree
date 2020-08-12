/* Global Variables */
//let baseURL ="api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}"
let baseURL ="https://api.openweathermap.org/data/2.5/weather?zip="
let key = "&appid=c02dfeec9e7239aa6b0362b7add9d80c";

//Event listener
document.getElementById("generate").addEventListener('click', performAction);


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//
function performAction(event){
  event.preventDefault();
  const newZip = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;
  getWeather(baseURL, newZip, key)
    .then(function (userData) {
      // add data to POST request
      postData('/add', {
        date: newDate, 
        temp: userData.main.temp, 
        feelings })
      }).then(function (newData) {
      // call updateUI to update browser content
      updateUI()
    })
}

const getWeather = async (baseURL, newZip, key)=>{

  const res = await fetch(baseURL+newZip+key);
  try {
    const userData = await res.json();
    //console.log(data)
    return userData;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

//Post data

const postData = async (url = '', data = {})=>{
  //console.log(data);
      const req = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify({
        date: data.date,
        temp: data.temp,
        content: data.feelings
      }), 
    });

      try {
        const newData = await req.json();
        console.log(newData);
        //return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json()
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.content;
  }
  catch (error) {
    console.log("error", error);
  }
};