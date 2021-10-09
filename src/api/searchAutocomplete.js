import axiosInstance from "./axiosInstance";

const apiEndpoint = "/search.json";

export function getAutocomplete(place) {
  if (place === "") return [];
  return axiosInstance({
    method: "get",
    url: apiEndpoint,
    params: {
      q: place,
    },
  });
}
