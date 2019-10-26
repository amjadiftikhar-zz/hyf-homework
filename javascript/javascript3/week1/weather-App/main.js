const button = document.querySelector('.btn');
const input = document.querySelector('#searchInput');

input.addEventListener('keyup', enterpressed);
    
function enterpressed(event){
    if(event.key === 'Enter'){
    weatherInformation(); 
    }
}

button.addEventListener('click', () => {
    weatherInformation();
});

function weatherInformation(){
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=9a151878a8544510e8eb364b4168fbec&units=metric';
    fetch(weatherUrl).then(response => {
        return response.json();
    }).then(data => {
        // console.log(data);
    showWeatherDetail(data)
    })
    .catch(err => {
        const resultDiv = document.querySelector('#searchResult')
        resultDiv.innerHTML = 'You have put a wrong city name';
    });   
}

function showWeatherDetail(data){
    const name = document.querySelector('.cityName');
    const temperature = document.querySelector('.temp');
    const icon = document.querySelector('.iconID');
    const iconGet = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconGet}@2x.png`
    const humidity = document.querySelector('.humidity');
    const cloudyResult = document.querySelector('.cloudResult')
    const desc = document.querySelector('.desc');
    const sunRise = document.querySelector('.sunRise');
    const sunSet = document.querySelector('.sunSet');        
    const countryName = document.querySelector('.country');
    const windSpeed = document.querySelector('.windSpeed')
    
    countryName.innerHTML = `Country: ${data.sys.country}`
    name.innerHTML = `City: ${data.name}`;
    temperature.innerHTML = `Temperature: ${Math.floor(data.main.temp)}° <span>C</span>`;
    icon.innerHTML = `<img src ="${iconUrl}">`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    cloudyResult.innerHTML = `Clouds: ${data.clouds.all}%`;
    desc.innerHTML = `Description: ${data.weather[0].description}`;
    windSpeed.innerHTML = `Wind Speed: ${Math.floor(data.wind.speed)} m/s`;
    let rise = data.sys.sunrise;
    let newSunrise = new Date(rise * 1000);        
    sunRise.innerHTML = `Sunrise: ${newSunrise}`;
    let set = data.sys.sunset;
    let newSunset = new Date(set * 1000);
    sunSet.innerHTML = `Sunset: ${newSunset}`;       
    }


if (navigator.geolocation) {    
    navigator.geolocation.getCurrentPosition(position => {
        // return (position.coords.latitude, position.coords.longitude);
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
  })
  } else {
    //false
    console.log('geolocation not available?! What browser is this?');
  }
  
function getWeatherForCurrentLocation(lat, long){    
    const api = 'https://api.openweathermap.org/data/2.5/weather?q=';
    // var city = 'copenhagen';
    const localCity = lat + long;
    const apiKey = '&appid=9a151878a8544510e8eb364b4168fbec';
    const apiUnit = '&units=metric';
    const url = api + localCity + apiKey + apiUnit;
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
      //   console.log(data);
      showWeatherDetail(data);
    })
    .catch(err => {
        const resultDiv = document.querySelector('#searchResult')
        resultDiv.innerHTML = 'Sorry, something bad happened when retrieving the weather';        
    }); 
}
window.addEventListener("load", () => {
    getWeatherForCurrentLocation();
});




