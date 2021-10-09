import React, { useEffect, useState } from "react";
import Day from "./day";
import styled from "styled-components";
import { getNextDaysWeather } from "./../../api/daily";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 800px) {
    position: static;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

function Daily({ selectedPlace }) {
  const [forecast, setForcast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getWeatherStatus() {
      setIsLoading(true);
      const { data } = await getNextDaysWeather(
        Object.keys(selectedPlace).length === 0 ? "Paris" : selectedPlace.name
      );
      setForcast(data.forecast.forecastday);
      setIsLoading(false);
    }
    getWeatherStatus();
  }, [selectedPlace]);

  return isLoading ? (
    <></>
  ) : (
    <Container>
      {forecast &&
        forecast.map((day, index) => {
          return <Day day={day} key={index} />;
        })}
    </Container>
  );
}

export default Daily;
