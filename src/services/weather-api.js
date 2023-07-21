import axios from "axios";

const API_KEY = "8ddc4d4caf994c91928163714230406";
const BASE_URL = "https://api.weatherapi.com/v1";

// export default class weatherAPI {
//   #axiosInstance = axios.create({
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   async fetchCurrentWeather(city) {
//     const params = {
//       key: this.#API_KEY,
//       q: city,
//       days: 5,
//       aqi: "no",
//       lang: "uk",
//     };

//     try {
//       return await this.#axiosInstance.get("/forecast.json", { params });
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

const getWeather = async (city) => {
  const params = {
    key: API_KEY,
    q: city,
    days: 5,
    aqi: "no",
    lang: "uk",
  };

  const res = await axios.get(BASE_URL + "/forecast.json", { params });
  return res.data;
};

export default getWeather;
