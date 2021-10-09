import React from "react";
import { Container, Content, BlurDiv } from "./containerElements";
import TopCard from "../topCard";
import ScrollHourly from "../scrollHourlySection";
import Daily from "../dailyWeather";
import WeatherUnitContextProvider from "../../context/WeatherUnitContext";

function Card({ selectedPlace }) {
  return (
    <Container>
      <Content>
        <WeatherUnitContextProvider>
          <BlurDiv></BlurDiv>
          <TopCard selectedPlace={selectedPlace} />
          <ScrollHourly selectedPlace={selectedPlace} />
          <Daily selectedPlace={selectedPlace} />
        </WeatherUnitContextProvider>
      </Content>
    </Container>
  );
}

export default Card;
