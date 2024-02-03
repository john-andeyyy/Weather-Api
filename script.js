/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 */

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
	const city = document.getElementById('city-input').value;
	const data = await getWeatherData(city)
	showWeatherData(data)
	// CODE GOES HERE
}

const getWeatherData = (city) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '501b9478cdmsh0ba8c055e0595c1p1d595cjsnb8a2869905ee',
			'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
		}
	};

	return fetch(`https://weather-api99.p.rapidapi.com/weather?city=${city}`, options)
		.then(response => response.json())
		.then(data => data)
		.catch(err => console.log(err))
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
	//CODE GOES HERE
	console.log(weatherData)
	document.getElementById("city-name").innerText = weatherData.name;
	document.getElementById("weather-type").innerText = weatherData.weather[0].main;
	document.getElementById("temp").innerText = weatherData.main.temp;
	document.getElementById("min-temp").innerText = weatherData.main.temp_min;
	document.getElementById("max-temp").innerText = weatherData.main.temp_max;

}






// const url = 'https://weather-api99.p.rapidapi.com/weather?city=chicago';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '501b9478cdmsh0ba8c055e0595c1p1d595cjsnb8a2869905ee',
// 		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
// 	}
// };

// fetch(url,options)
// .then(response => response.json())
// .then(data =>console.log(data.weather[0].main))
// .catch(err => console.log(err))
