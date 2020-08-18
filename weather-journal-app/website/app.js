/* Global Variables */
//let baseURL ="api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}"
let baseURL ="https://api.openweathermap.org/data/2.5/weather?zip=";
let key = "&appid=c02dfeec9e7239aa6b0362b7add9d80c&units=metric";

//Event listener
document.getElementById("generate").addEventListener('click', performAction);


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate() +'.'+ (d.getMonth()+1) +'.'+ d.getFullYear();

//
function performAction(event){
  const newZip = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;
  getWeather(baseURL, newZip, key)
    .then(function (data) {
      // add data to POST request
      console.log(data);
      postData('/addData', {date: newDate, name: data.name, temp: data.main.temp, content: feelings})
      }).then(function (newData) {
      // call updateUI to update browser content
      updateUI()
    })
}

const getWeather = async (baseURL, newZip, key)=>{

  const res = await fetch(baseURL+newZip+key);
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

const postData = async (url = '', data = {})=>{
  //console.log(data);
      const req = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
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
  const request = await fetch('/allData');
  try {
    const allData = await request.json()
    console.log(allData);
    document.getElementById('date').innerHTML = `Date: ${allData.date}`;
    document.getElementById('city').innerHTML = `City: ${allData.name}`;
    document.getElementById('temp').innerHTML = `Temperature: ${allData.temp.toFixed(1)}&#176C`;
    document.getElementById('content').innerHTML = `Feelings: ${allData.content}`;
  }
  catch (error) {
    console.log("error", error);
  }
};