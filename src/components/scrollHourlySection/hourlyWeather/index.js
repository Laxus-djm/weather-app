import React, { useContext } from "react";
import { Container, Icon, IconWrapper, Item, Wrapper } from "./hourlyElements";
import { WeatherUnitContext } from "../../../context/WeatherUnitContext";

function Hourly({ hour }) {
  const { weatherUnit } = useContext(WeatherUnitContext);
  const TEMP = `temp_${weatherUnit}`;
  return (
    <Container>
      <Wrapper>
        <IconWrapper>
          <Icon src={hour.condition.icon} draggable="false" />
        </IconWrapper>
        <Item>{hour[TEMP]}°</Item>
        <Item>{hour.wind_kph} kph</Item>
        <Item>{hour.time.slice(11)}</Item>
      </Wrapper>
    </Container>
  );
}

export default Hourly;
