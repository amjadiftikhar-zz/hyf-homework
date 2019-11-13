const name = document.querySelector("#city");
const countryName = document.querySelector(".country");
const temperature = document.querySelector("#temp");
const icon = document.querySelector("#icon");
const desc = document.querySelector(".desc");
const windSpeed = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const sunRise = document.querySelector(".sunRise");
const sunSet = document.querySelector(".sunSet");
const button = document.querySelector(".btn");
const input = document.querySelector("#searchInput");

input.addEventListener("keyup", enterpressed);
function enterpressed(event) {
	if (input.value === "" || input.value === undefined || input.value === null) {
		return alert("Add some city name");
	} else if (event.key === "Enter") {
		weatherInformation();
	}
}

button.addEventListener("click", () => {
	if (input.value === "" || input.value === undefined || input.value === null) {
		return alert("Add some city name");
	}
	weatherInformation();
});

function weatherInformation() {
	const url =
		"https://api.openweathermap.org/data/2.5/weather?q=" +
		input.value +
		"&appid=9a151878a8544510e8eb364b4168fbec&units=metric";
	fetch(url)
		.then(response => response.json())
		.then(data => {
			// console.log(data);
			showWeatherDetail(data);
			document.querySelector("#searchInput").value = "";
		})
		.catch(err => {
			name.innerHTML = "wrong city name";
			countryName.innerHTML = "try again!";
		});
}

function showWeatherDetail(data) {
	name.innerHTML = data.name;
	countryName.innerHTML = data.sys.country;
	temperature.innerHTML = Math.floor(data.main.temp);
	desc.innerHTML = data.weather[0].description;
	iconGot = data.weather[0].icon;
	const iconUrl = `http://openweathermap.org/img/wn/${iconGot}@2x.png`;
	icon.innerHTML = `<img src ="${iconUrl}" alt height = '25%' width = '25%'}>`;
	windSpeed.innerHTML = `Wind Speed: ${Math.floor(data.wind.speed)} m/s`;
	humidity.innerHTML = `Humidity: ${data.main.humidity} %`;
	let newSunrise = new Date(data.sys.sunrise * 1000);
	sunRise.innerHTML = `Sunrise: ${formatTime(newSunrise)}`;
	let newSunset = new Date(data.sys.sunset * 1000);
	sunSet.innerHTML = `Sunset: ${formatTime(newSunset)}`;
}

function formatTime(localTime) {
	return localTime.toLocaleTimeString();
}

window.addEventListener("load", () => {
	navigator.geolocation.getCurrentPosition(success, error);

	function success(position) {
		let lat = position.coords.latitude;
		let long = position.coords.longitude;
		getWeatherForCurrentLocation(lat, long);
	}
	function error() {
		console.log("error");
	}
});

function getWeatherForCurrentLocation(lat, long) {
	const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9a151878a8544510e8eb364b4168fbec&units=metric`;
	fetch(api)
		.then(response => {
			return response.json();
		})
		.then(data => {
			showWeatherDetail(data);
		})
		.catch(err => {
			const resultDiv = document.querySelector("#searchResult");
			resultDiv.innerHTML =
				"Sorry, something bad happened when retrieving the weather";
		});
}
