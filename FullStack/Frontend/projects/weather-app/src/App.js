import React, { useState , useEffect} from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather"

function App(){

  
  // function to update the city state
  const [city,setCity]=useState("");
  const [weather, setWeather] = useState(null); // State to store weather data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  

  const onCityChange= (newCity) => {
    setCity(newCity);

  
  };
  const fetchWeather = async()=>{
    setError(""); // Clear previous errors
    setWeather(null); // Clear previous data
    if (!city) return; //Don't fetch if there is  no city

    setLoading(true);
    setError("");
    try{
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
    
    setWeather(response.data);
    }
    catch(error){
    setError("Error fetching weather data.");
    }
    finally{
      setLoading(false)
    }

};
//use useEffect to fetch wheather whenever the city changes
useEffect(()=>{
fetchWeather();//call the fetchweather whenever city state changes
},[city]);
  return (
    <div>
      <h1>
        Wheather App
        <SearchBar onCityChange={onCityChange}/>
        <Weather weather={weather} loading={loading} error={error} />
      </h1>
    </div>
  );
}
export default App;
