import React, {useState} from "react";


const SearchBar=({onCityChange})=>{
  const[city,setCity]=useState("");
  const handleInputChange=(e)=>{
    setCity(e.target.value);//updates state as user changes
  };
  const handleSearchClick=()=>{
    onCityChange(city);//call the parent to pass the function
  };

  return(
    <div>
      <input
        type="text"
        placeholder="enter the city name"
        value={city}
        onChange={handleInputChange}//update the change in the input change
      />
      <button onClick={handleSearchClick}>Search</button>
      
    </div>
  );

};
export default SearchBar;
