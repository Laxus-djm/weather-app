import axiosInstance from "./axiosInstance";

const apiEndpoint = "/current.json";

export function getCurrentWeather(place) {
  
  return axiosInstance({
    method: "get",
    url: apiEndpoint,
    params: {
      q: place,
    },
  });
}
