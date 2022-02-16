const fetch = require('node-fetch');

require('dotenv').config();

exports.handler = async (e) => {
  try {
    // grab the city, state, and country from the request's query parameters
    // here is an example from the netlify docs:
    // https://functions.netlify.com/playground/#hello%2C-%7Bname%7D 
    const geoCodeResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Portland,OR,US&limit=1&appid=${process.env.WEATHER_KEY}`);

    // tragicly, we cannot just pass the city name to this API. it wants a latitude and longitude for the weather

    const geoCodeJson = await geoCodeResponse.json();

    const latitude = geoCodeJson[0].lat;
    const longitude = geoCodeJson[0].lon;
    // consult the yelp docs to figure out how to use a city, state, and country to make a request and get the latitude and longitude
    // https://openweathermap.org/api/geocoding-api

    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=45.5202471&lon=-122.6741949&appid=${process.env.WEATHER_KEY}&units=imperial`);
    // once you have gotten the lat/lon using the geocoding api, use the lat/lon to get the weather. Consult the docs below:
    // https://openweathermap.org/api/one-call-api
    const weatherJson = await weatherResponse.json();


    return { 
      statusCode: 200, 
    // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the weather data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
      body: JSON.stringify(weatherJson),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
