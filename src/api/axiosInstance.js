import axios from "axios";

axios.defaults.baseURL = "http://api.weatherapi.com/v1";
axios.defaults.params = {};
axios.defaults.headers["key"] = "1e8c975b230c46a1a9e45042212809";

export default axios;
