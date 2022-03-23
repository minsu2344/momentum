const API_KEY = 'b7331f02f9a8d9e0aabd0e04254d2a32';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then( respose => respose.json())
    .then( data => {
      const weather = document.querySelector('#weather span');
      const city = document.querySelector('#weather span:last-child');
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert('Can\'t find you. No weather for you.')
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)