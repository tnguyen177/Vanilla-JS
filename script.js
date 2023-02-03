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
  
  function showWeather(response) {
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
  
function displayForecast(){
  let forcastElement = document.querySelector("forecast");
  forecastElement.innerHTML = `
  <div class="row">
  <div class="col-2">
    <div class="weather-forecast-date">Thurs</div>
    <i class="fa-solid fa-cloud"></i>
    <div class="weather-forecast-temperatures">
      <span class="weather-forecast-temp-max">62°</span>
      <span class="weather-forecast-temp-min">60°</span>
 </div>
  </div>
</div>`
}

  function searchCity(city) {
    let apiKey = "281450ec88936f4fa8ee9864682b49a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(showWeather);
  }
  
  let handle = document.querySelector("#search-form");
  handle.addEventListener("submit", enter);
  
alert("Hello")

displayForecast();

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

  