import React, { useState } from "react";

export const WeatherUnitContext = React.createContext();

function WeatherUnitContextProvider({ children }) {
  const [weatherUnit, setWeatherUnit] = useState("c");

  const updateWeatherUnit = (unit) => {
    setWeatherUnit(unit);
  };

  return (
    <WeatherUnitContext.Provider value={{ weatherUnit, updateWeatherUnit }}>
      {children}
    </WeatherUnitContext.Provider>
  );
}

export default WeatherUnitContextProvider;
