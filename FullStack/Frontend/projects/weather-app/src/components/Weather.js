import React from "react";

const Weather = ({weather,loading,error})=>{
  return (
    <div>
      
      {/*show loading message*/}
      {loading &&  <p>Loading Wheather data....</p>}
      
      {/* Show Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show Weather Data */}
      {weather && (
        <div>
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}

      
    </div>
  );
};
export default Weather;