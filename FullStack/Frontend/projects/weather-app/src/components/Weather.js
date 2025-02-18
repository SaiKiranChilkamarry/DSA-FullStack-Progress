// src/components/Weather.js
import React from 'react';

const Weather = ({ weather, loading, error }) => {
  return (
    <div className="mt-6">
      {/* Show loading message */}
      {loading && <p className="text-center text-xl">Loading weather data...</p>}

      {/* Show Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Show Weather Data */}
      {weather && (
        <div className="text-center">
          <h3 className="text-xl font-bold">
            {weather.name}, {weather.sys.country}
          </h3>
          <p className="text-lg">Temperature: {weather.main.temp}°C</p>
          <p className="text-lg">Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
