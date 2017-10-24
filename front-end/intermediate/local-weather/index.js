if (navigator.geolocation) {
  navigator.geolocation.watchPosition((position) => {
    displayWeather(position.coords.latitude, position.coords.longitude);
  });
}

const displayWeather = (latitude, longitude) => {
  let lat = latitude;
  let lon = longitude;

  console.log('Latitude: ', lat);
  console.log('Longitude: ', lon);

  $.getJSON(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`, (data) => {
    // Show weather for current location data.main.temp, data.main.humidity
    // Different icon or background image depending on weather
    // Push a button to toggle between F/C
    $('.weather').html(JSON.stringify(data));
    $('body > h1').append('<span>' + data.name + '</span>');
    $('.weather').append('<h1>' + Math.round(JSON.stringify(data.main.temp + 9)) + ' &deg;<a href="#">C</a></h1>');
  });
}


