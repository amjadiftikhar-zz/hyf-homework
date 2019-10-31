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
    const name = document.querySelector('#city');
    const countryName = document.querySelector('.country');
    const temperature = document.querySelector('#temp');
    const icon = document.querySelector('#icon');
    const desc = document.querySelector('#desc');
    const windSpeed = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const sunRise = document.querySelector('.sunRise');
    const sunSet = document.querySelector('.sunSet');
        

    name.innerHTML = data.name;
    countryName.innerHTML = data.sys.country;
    temperature.innerHTML = Math.floor(data.main.temp);
    desc.innerHTML = data.weather[0].description;
    iconGot = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconGot}@2x.png`;
    icon.innerHTML = `<img src ="${iconUrl}" alt height = '250' width = '250'}>`;
    windSpeed.innerHTML = `Wind Speed: ${Math.floor(data.wind.speed)} m/s`;
    humidity.innerHTML = `Humidity: ${data.main.humidity} %`;
    let newSunrise = new Date((data.sys.sunrise) * 1000);
    sunRise.innerHTML = `Sunrise: ${formatTime(newSunrise)}`;
    let newSunset = new Date((data.sys.sunset) * 1000);
    sunSet.innerHTML = `Sunset: ${formatTime(newSunset)}`;
    }

function formatTime(localTime) {
        return localTime.toLocaleTimeString();
}

window.addEventListener("load", () => {
   navigator.geolocation.getCurrentPosition(success, error); 

   function success(position){
       let lat = position.coords.latitude;
    //    console.log(lat)
       let long = position.coords.longitude;
    //    console.log(long)
       getWeatherForCurrentLocation(lat, long)
   }
   function error(){
       console.log('error')
   }
});

function getWeatherForCurrentLocation(lat, long){ 
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}`; 
    const apiKey = '&appid=9a151878a8544510e8eb364b4168fbec';
    const apiUnit = '&units=metric';
    const url = api + apiKey + apiUnit;
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        // console.log(data);
      showWeatherDetail(data);
    })
    .catch(err => {
        const resultDiv = document.querySelector('#searchResult')
        resultDiv.innerHTML = 'Sorry, something bad happened when retrieving the weather';        
    }); 
}





