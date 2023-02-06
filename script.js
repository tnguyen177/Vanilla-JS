// let weather = {
//     paris: {
//       temp: 19.7,
//       humidity: 80
//     },
//     tokyo: {
//       temp: 17.3,
//       humidity: 50
//     },
//     lisbon: {
//       temp: 30.2,
//       humidity: 20
//     },
//     "san francisco": {
//       temp: 20.9,
//       humidity: 100
//     },
//     oslo: {
//       temp: -5,
//       humidity: 20
//     }
//   };
  //let city = prompt("Enter a city");
  //city = city?.toLowerCase();
  //if (weather[city]) {
  //let temperature = weather[city].temp;
  //let Celsius = Math.round(temperature);
  //let Fahrenheit = Math.round(Celsius * 1.8 + 32);
  ///let humidity = weather[city].humidity;
  //alert(
  //  `It is currently ${Celsius}°C (${Fahrenheit}°F) in ${city} with a humidity of ${humidity}%.`
  // );
  //} else {
  //alert(
  //`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  //);
  //}
  
  function formatDate() {
    let date = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let currentDay = days[date.getDay()];
    const currentHour = date.getHours();
    const currentMin =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  
    let formattedDate = `Today is ${currentDay} ${currentHour}:${currentMin}`;
  
    var newContent = formattedDate;
    var contentHolder = document.getElementById("dateTimeContainer");
    contentHolder.innerHTML = newContent;
  }
  
  formatDate();
  
function getForecast(coordinates) {
  let apiKey = "215576bab28022db35e6e64f040e1b56";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayForecast);}



  function showWeather(response) {
    getForecast(response.data.coord);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temp").innerHTML = Math.round(
      response.data.main.temp
    );
    
  }
  
  function enter(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
  }
  
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  return days[day];//this is an index
}


function displayForecast(response) { 
  let forecast = response?.data?.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  forecast?.forEach(function (forecastDay, index) {
    if (index < 6) {
    forecastHTML = forecastHTML + `
  <div class="col-2">
    <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
    <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        />
    <div class="weather-forecast-temperatures">
      <span class="weather-forecast-temp-max">${Math.round(forecastDay.temp.max)}°</span> | 
      <span class="weather-forecast-temp-min">${Math.round(forecastDay.temp.min)}°</span>
 </div>
  </div>`;}
});

forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;

}

  function searchCity(city) {
    let apiKey = "215576bab28022db35e6e64f040e1b56";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(showWeather);
  }
  
  let handle = document.querySelector("#search-form");
  handle.addEventListener("submit", enter);
  
// alert("Hello");

displayForecast();
searchCity ("Lake Forest");

  // let tempElement = document.querySelector("#temp");
  // tempElement.innerHTML = defaultTemp;
  
  // function convert2F(event) {
  //   event.preventDefault();
  //   tempElement.innerHTML = Math.round(defaultTemp * 1.8 + 32);
  // }
  
  // function convert2C(event) {
  //   event.preventDefault();
  //   tempElement.innerHTML = defaultTemp;
  // }
  
  // let fahrLink = document.querySelector("#fLink");
  // fahrLink.addEventListener("click", convert2F);
  
  // let celsLink = document.querySelector("#cLink");
  // celsLink.addEventListener("click", convert2C);

  