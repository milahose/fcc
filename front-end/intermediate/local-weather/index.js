const error = () => {
  alert('Unable to determine current location');
}

const displayWeather = (position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  const key = '407df37516d6efce';
  const API = `http://api.wunderground.com/api/${key}/conditions/forecast/forecast10day/q/${lat},${lon}.json`;

  $.getJSON(API, (weather) => {
    $('h1').html('Local Weather');
    $('h2').html(weather.current_observation.display_location.full);
    $('p').html(weather.current_observation.weather);  
    $('.fahrenheit').html(`${Math.ceil(weather.current_observation.temp_f)} &deg;<a href="#">F</a>`);
    $('.celsius').html(`${Math.ceil(weather.current_observation.temp_c)} &deg;<a href="#">C</a>`);
    $('a').on('click', () => { $('h3').toggle() });

  if (weather.current_observation.weather === 'Clear' || weather.current_observation.weather === 'Dust') {
      $('.weather_icon').html('<div class="icon sunny"><div class="sun"><div class="rays"></div></div></div>');
    } else if (weather.current_observation.weather === 'Clouds' || weather.current_observation.weather === 'Haze') {
      $('.weather_icon').html('<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>');
    } else if (weather.current_observation.weather === 'Thunderstorm') {
      $('.weather_icon').html('<div class="icon thunder-storm"><div class="cloud"></div><div class="lightning"><div class="bolt"></div><div class="bolt"></div></div></div>');
    } else if (weather.current_observation.weather === 'Snow') {
      $('.weather_icon').html('<div class="icon flurries"><div class="cloud"></div><div class="snow"><div class="flake"></div><div class="flake"></div></div></div>');
    } else if (weather.current_observation.weather === 'Rain') {
      $('.weather_icon').html('<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>');
    } else if (weather.current_observation.weather === 'Drizzle') {
      $('.weather_icon').html('<div class="icon sun-shower"><div class="cloud"></div><div class="sun"><div class="rays"></div></div><div class="rain"></div></div>');
    }
  });
}

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(displayWeather, error);
} else {
  alert('Geolocation is not supported');
}
 