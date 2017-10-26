if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  alert('Geolocation is not supported');
}

const error = () => {
  alert('Unable to determine current location');
}

const displayWeather = (position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  const API = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`; 

  $.getJSON(API, (data) => {

  });
}

const key = '40df37516d6efce';

// if (navigator.geolocation) {
//   navigator.geolocation.watchPosition((position) => {
//     displayWeather(position.coords.latitude, position.coords.longitude);
//   });
// }

// const displayWeather = (latitude, longitude) => {
//   let lat = latitude;
//   let lon = longitude;

//   console.log('Latitude: ', lat);
//   console.log('Longitude: ', lon);

//   $.getJSON(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`, (data) => {
//     // Show weather for current location data.main.temp, data.main.humidity
//     // Different icon or background image depending on weather
//     // Push a button to toggle between F/C

//     // $('.weather').html(JSON.stringify(data));
//     $('.weather').append('<h1>' + data.name + ', ' + data.sys.country + '</h1>');
//     $('.weather').append('<p>' + data.weather[0].main + '</p>');
//     $('.weather').append('<h2 style="display: none">' + Math.round(JSON.stringify(data.main.temp + 9)) + ' &deg;<a href="#">C</a></h2>');
//     $('.weather').append('<h2>' + Math.floor(JSON.stringify((data.main.temp * 9) / 5 + 38)) + ' &deg;<a href="#">F</a></h2>');
//     $('a').on('click', () => {
//       $('h2').toggle();
//     });

//     if (data.weather[0].main === 'Clear' || data.weather[0].main === 'Dust') {
//       $('.weather').append('<div class="icon sunny"><div class="sun"><div class="rays"></div></div></div>');
//     } else if (data.weather[0].main === 'Clouds' || data.weather[0].main === 'Haze') {
//       $('.weather').append('<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>');
//     } else if (data.weather[0].main === 'Thunderstorm') {
//       $('.weather').append('<div class="icon thunder-storm"><div class="cloud"></div><div class="lightning"><div class="bolt"></div><div class="bolt"></div></div></div>');
//     } else if (data.weather[0].main === 'Snow') {
//       $('.weather').append('<div class="icon flurries"><div class="cloud"></div><div class="snow"><div class="flake"></div><div class="flake"></div></div></div>');
//     } else if (data.weather[0].main === 'Rain') {
//       $('.weather').append('<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>');
//     } else if (data.weather[0].main === 'Drizzle') {
//       $('.weather').append('<div class="icon sun-shower"><div class="cloud"></div><div class="sun"><div class="rays"></div></div><div class="rain"></div></div>');
//     }
//   });
// }
 