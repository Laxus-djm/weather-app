import React, { useContext } from "react";
import {
  Container,
  DayName,
  FlexDiv,
  Icon,
  IconWrapper,
  Svg,
  Temperature,
  Time,
  Wrapper,
} from "./dayElements";
import { getDay } from "./../dateUtils";
import { WeatherUnitContext } from "../../../context/WeatherUnitContext";
import { SelectedDayContext } from "../../../context/SelectedDayContext";
import { WiSunset, WiSunrise } from "react-icons/wi";

function Day({ day }) {
  const { weatherUnit } = useContext(WeatherUnitContext);
  const { updateSelectedDay } = useContext(SelectedDayContext);

  return (
    <Container onClick={() => updateSelectedDay(day)}>
      <Wrapper>
        <DayName>{getDay(day.date)}</DayName>
        <IconWrapper>
          <Icon src={day.day.condition.icon} draggable="false" />
        </IconWrapper>
        <FlexDiv style={{ marginBottom: 15 }}>
          <Temperature>{day.day[`maxtemp_${weatherUnit}`]}°</Temperature>
          <Temperature>{day.day[`mintemp_${weatherUnit}`]}°</Temperature>
        </FlexDiv>
        <FlexDiv>
          {Svg(WiSunrise)}
          <Time>{day.astro.sunrise}</Time>
        </FlexDiv>
        <FlexDiv>
        {Svg(WiSunset)}
          <Time>{day.astro.sunset}</Time>
        </FlexDiv>
      </Wrapper>
    </Container>
  );
}

export default Day;
