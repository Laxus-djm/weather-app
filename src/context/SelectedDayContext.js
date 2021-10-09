import React, { useState } from "react";

export const SelectedDayContext = React.createContext();

function SelectedDayProvider({ children }) {
  const [selectedDay, setselectedDay] = useState(null);

  const updateSelectedDay = (day) => {
    setselectedDay(day);
  };

  return (
    <SelectedDayContext.Provider value={{ selectedDay, updateSelectedDay }}>
      {children}
    </SelectedDayContext.Provider>
  );
}

export default SelectedDayProvider;
