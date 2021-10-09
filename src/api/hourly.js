import axiosInstance from "./axiosInstance";

const apiEndpoint = "/forecast.json";

export function getForecastWeather(place, selectedDay) {
  console.log("done");
  return axiosInstance({
    method: "get",
    url: apiEndpoint,
    params: {
      q: place,
      dt: selectedDay ? selectedDay.date : "",
    },
  });
}
