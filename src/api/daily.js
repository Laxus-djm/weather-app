import axiosInstance from "./axiosInstance";

const apiEndpoint = "/forecast.json";

export function getNextDaysWeather(place) {
  return axiosInstance({
    method: "get",
    url: apiEndpoint,
    params: {
      q: place,
      days: 4,
    },
  });
}
