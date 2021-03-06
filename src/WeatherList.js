import React from 'react';

export default function WeatherList({ weatherSearch }) {
  return (
    <div className='weather'>
      {
        weatherSearch.map((weatherItem, i) => 
          <div className='weather-item' 
            key={weatherItem.dt + i}>

            <p>Date: {new Date(weatherItem.dt * 1000).toUTCString()}</p>
            <div className='temp'>
              <p>Temp: {weatherItem.temp.day}</p>
              <p>Feels like: {weatherItem.feels_like.day}</p>
            </div>
            <h4>{weatherItem.weather[0].description}</h4>
          </div>)
      }
    </div>
  );
}
