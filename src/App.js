import React, { useState, useEffect, useContext } from "react";
import Card from "./components/container";
import Search from "./components/searchbox";
import { getAutocomplete } from "./api/searchAutocomplete";
import { SelectedDayContext } from "./context/SelectedDayContext";
import "./App.css";

function App() {
  const [places, setPlaces] = useState([]);
  const [citySearched, setCitySearched] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(() => {
    let place = localStorage.getItem("selectedPlace");
    if (place) return JSON.parse(place);
    else return {};
  });
  const { updateSelectedDay } = useContext(SelectedDayContext);



  useEffect(() => {
    async function getCities() {
      const { data } = await getAutocomplete(citySearched);
      if (data) setPlaces(data);
    }
    getCities();
  }, [citySearched]);

  const handleSearching = (e) => {
    const searchTyping = e.target.value;
    setCitySearched(searchTyping);
  };

  const handleClick = (suggestion) => {
    setSelectedPlace(suggestion);
    localStorage.setItem("selectedPlace", JSON.stringify(suggestion));
    setCitySearched("");
    setPlaces([]);
    updateSelectedDay(null);
  };

  return (
    <>
      <Search
        placeholder="Search for a city ..."
        data={places}
        value={citySearched}
        handleType={handleSearching}
        handleClick={handleClick}
      />
      <Card selectedPlace={selectedPlace} />
    </>
  );
}

export default App;
