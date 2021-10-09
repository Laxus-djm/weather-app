import React, { useState, useEffect, useContext } from "react";
import { WindMillLoading } from "react-loadingg";
import { WeatherUnitContext } from "./../../context/WeatherUnitContext";
import {
  Container,
  Degres,
  H3,
  Icon,
  LeftSide,
  LocationInfo,
  Mode,
  ModeItem,
  SvgSection,
  Temperature,
  WeatherStatus,
  H5,
  RightSide,
  Divider,
  Wrapper,
  H5Container,
} from "./topCardElements";
import { getCurrentWeather } from "../../api/current";

function TopCard({ selectedPlace }) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { weatherUnit, updateWeatherUnit } = useContext(WeatherUnitContext);
  const TEMP = `feelslike_${weatherUnit}`;

  useEffect(() => {
    async function getWeatherStatus() {
      setIsLoading(true);
      const { data } = await getCurrentWeather(
        Object.keys(selectedPlace).length === 0 ? "Paris" : selectedPlace.name
      );
      setCurrentWeather(data);
      setIsLoading(false);
    }
    getWeatherStatus();
  }, [selectedPlace]);

  return isLoading ? (
    <WindMillLoading color="white" size="large" />
  ) : (
    <Container>
      <LocationInfo>
        <H3>
          {currentWeather &&
            `${currentWeather.location.name} ${currentWeather.location.region} ${currentWeather.location.country}`}
        </H3>
        <H3> {currentWeather && `${currentWeather.location.localtime}`}</H3>
      </LocationInfo>
      <Wrapper>
        <LeftSide>
          <WeatherStatus>
            <SvgSection>
              <Icon
                src={
                  currentWeather
                    ? currentWeather.current.condition.icon
                    : require("../../images/SVG/Hail.svg").default
                }
                alt="weather icon"
              />
              <H3>
                {currentWeather && `${currentWeather.current.condition.text}`}
              </H3>
            </SvgSection>
            <Temperature>
              <Degres>
                {currentWeather && `${currentWeather.current[TEMP]}`}°
              </Degres>
            </Temperature>
            <Mode>
              <ModeItem
                selected={weatherUnit === "c" ? true : false}
                onClick={() => updateWeatherUnit("c")}
              >
                C
              </ModeItem>
              <Divider></Divider>
              <ModeItem
                selected={weatherUnit === "f" ? true : false}
                onClick={() => updateWeatherUnit("f")}
              >
                F
              </ModeItem>
            </Mode>
          </WeatherStatus>
        </LeftSide>

        <RightSide>
          <H5Container>
            <H5>
              Humidity:{" "}
              {currentWeather && ` ${currentWeather.current.humidity}`}%
            </H5>
            <H5>
              Wind: Wind:{" "}
              {currentWeather && ` ${currentWeather.current.wind_kph}`} kmph
            </H5>
            <H5>
              Feels like :{" "}
              {currentWeather && ` ${currentWeather.current[TEMP]} °`}
            </H5>
          </H5Container>
        </RightSide>
      </Wrapper>
    </Container>
  );
}

export default TopCard;
