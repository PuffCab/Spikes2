console.log("navigator :>> ", navigator);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("error getting the geolocation");
  }
}

function showPosition(position) {
  console.log("position :>> ", position);
  // Object destructuring
  const { longitude, latitude } = position;
  //the code below is the same as the one above
  //   const longitude = position.longitude;
  //   const latitude = position.latitude;

  const url = `https://api-bdc.io/data/reverse-geocode-client?latitude=${longitude}&longitude=${latitude}&localityLanguage=en`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log("result :>> ", result);
      // const city = result.city

      const { city } = result;
      getCityWeather(city);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
}

const getCityWeather = (city) => {
  console.log("city :>> ", city);
  //Do some input validation 
  const normalisedCity = city.toLowerCase()
  const currentDate = new Date();
  const astronomyUrl = `http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${city}&dt=${new Date()}`;
  const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;

  const urls = [astronomyUrl, forecastUrl];

  const promisesArray = urls.map(async (url) => {
    return fetch(url).then((response) => {
      if (!response.ok) {
        console.log("something went wrong fetchting");
      }
      return response.json();
    });
  });

  Promise.all(promisesArray).then((result) => {
    console.log("result :>> ", result);
    const [astronomyData, weatherData] = result;
    displayData(weatherData, astronomyData);
  });
};

const displayData = (weatherData, astronomyData) => {
  // hide spinner
  const spinner = document.getElementById("spinner");
  spinner.classList.add("invisible");
  //show table
  const containerData = document.getElementById("data-to-display");
  containerData.classList.remove("invisible");

  const city = document.getElementById("city");
  const tbody = document.getElementById("weather-data");
  const astronomyCards = document.getElementById("astronomy-cards");

  cleanDOM(city, tbody, astronomyCards);

  const { forecast, location } = weatherData;

  city.innerText = `Diplaying the weather for ${location.name} in ${location.country}`;
  const { astronomy } = astronomyData;

  createAstronomyCards(astronomyCards, astronomy);
  createTable(tbody, forecast);
};

const createAstronomyCards = (astronomyCards, astronomy) => {
  const divSun = document.createElement("div");
  divSun.setAttribute("class", "card ");
  const divSunBody = document.createElement("div");
  divSunBody.setAttribute("class", "card-body");
  const h5Sun = document.createElement("h5");
  h5Sun.setAttribute("class", "card-title");
  h5Sun.innerText = "Sun";
  const ulSun = document.createElement("ul");
  ulSun.setAttribute("class", "list-group list-group-flush");
  const ulSunRise = document.createElement("li");
  ulSunRise.setAttribute("class", "list-group-item");
  ulSunRise.innerText = `Sunrise is at ${astronomy.astro.sunrise}`;
  const ulSunSet = document.createElement("li");
  ulSunSet.setAttribute("class", "list-group-item");
  ulSunSet.innerText = `Sunset is at ${astronomy.astro.sunset}`;
  ulSun.appendChild(ulSunRise);
  ulSun.appendChild(ulSunSet);
  divSunBody.appendChild(h5Sun);
  divSun.appendChild(divSunBody);
  divSun.appendChild(ulSun);
  astronomyCards.appendChild(divSun);
};
const cleanDOM = (city, tbody, astronomyCards) => {
  city.innerHTML = "";
  tbody.innerHTML = "";
  astronomyCards.innerHTML = "";
    document.getElementById("city-search").value = "";
};

const createTable = (tbody, forecast) => {
  forecast.forecastday.forEach((day) => {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    td1.innerText = day.date;
    td2.innerText = day.day.mintemp_c;
    td3.innerText = day.day.maxtemp_c;
    td4.innerText = day.day.condition.text;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    tbody.appendChild(row);
  });
  addEventListener();
};

const addEventListener = () => {
  const input = document.querySelector(".form-control");
  let city
  input.addEventListener("input", (event) => {
    console.log("event", event);
    console.log("event :>> ", event.target.value);
    city = event.target.value
  });
  //   input.addEventListener("keypress", () => {
  //     console.log("i am typing");
  //   });
  input.addEventListener("keydown", (event) => {
    console.log("event :>> ", event);
    if(event.key === "Enter") {
        getCityWeather(city)
    }
  });
};
getLocation();
