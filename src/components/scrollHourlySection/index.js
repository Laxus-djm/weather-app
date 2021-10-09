import React, { useState, useEffect, useContext } from "react";
import Hourly from "./hourlyWeather";
import ReactElasticCarousel from "react-elastic-carousel";
import useWindowDimensions from "./useWindowDemention";
import { getForecastWeather } from "./../../api/hourly";
import { renderPag, myArrow } from "./CarouselJob";
import { SelectedDayContext } from "../../context/SelectedDayContext";

function ScrollHourly({ selectedPlace }) {
  const [forecast, setForcast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { selectedDay } = useContext(SelectedDayContext);
  const { width } = useWindowDimensions();

  useEffect(() => {
    async function getWeatherStatus() {
      setIsLoading(true);
      const { data } = await getForecastWeather(
        Object.keys(selectedPlace).length === 0 ? "Paris" : selectedPlace.name,
        selectedDay
      );
      setForcast(data.forecast.forecastday[0].hour);
      setIsLoading(false);
    }
    getWeatherStatus();
  }, [selectedPlace, selectedDay]);

  return isLoading ? (
    <></>
  ) : (
    <ReactElasticCarousel
      itemsToShow={width <= 800 ? 3 : 8}
      showArrows={width <= 800 ? false : true}
      pagination={width <= 800 ? true : false}
      itemsToScroll={1}
      renderPagination={renderPag}
      renderArrow={myArrow}
      styles={{ marginBottom: "50px" }}
    >
      {forecast &&
        forecast.map((hour, index) => <Hourly key={index} hour={hour} />)}
    </ReactElasticCarousel>
  );
}

export default ScrollHourly;
