// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onCityChange = (newCity) => {
    setCity(newCity);
  };

  const fetchWeather = async () => {
    setError("");
    setWeather(null);
    if (!city) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setError("Error fetching weather data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold my-4">Weather App</h1>
      <SearchBar onCityChange={onCityChange} />
      <Weather weather={weather} loading={loading} error={error} />
    </div>
  );
}

export default App;
