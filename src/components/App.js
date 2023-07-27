import { useState, useEffect, useRef } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import Loader from "./Loader/Loader";

import getWeather from "../services/weather-api";

document.title = "Weather APP";

const App = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [update, setUpdate] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setCity("Kryvyy Rih");
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);

      try {
        const weather = await getWeather(city);

        setWeather(() => ({ ...weather }));
      } catch (err) {
        console.log("fetchWeather", err);
      } finally {
        setLoading(false);
      }
    };
    if (city !== "") {
      fetchWeather();
    }
  }, [city, update]);

  const timer = useRef(() => {
    setInterval(() => {
      setUpdate(!update);
    }, 300000);

    return clearInterval(timer);
  });

  const { location, current, forecast } = weather;
  const isNotEmptyWeather = location ? true : false;

  return (
    <Container maxWidth="sm" sx={{ padding: 2 }} className="App">
      {isNotEmptyWeather && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <CurrentWeather current={current} location={location} />
          <ForecastWeather forecast={forecast} />
        </Box>
      )}
      {isLoading && <Loader />}
    </Container>
  );
};

export default App;
