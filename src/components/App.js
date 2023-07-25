import { Component } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import Loader from "./Loader/Loader";

import getWeather from "../services/weather-api";

export default class App extends Component {
  state = {
    weather: {},
    city: "",
    update: false,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ city: "Kryvyy Rih" });

    // setInterval(() => {
    //   this.setState((prevState) => {
    //     return { update: !prevState.update };
    //   });
    // }, 60000);
  }

  componentDidUpdate(_, prevState) {
    const { city, update } = this.state;

    if (prevState.city !== city || prevState.update !== update) {
      this.fetchWeather();
    }
  }

  componentDidCatch(err, info) {
    console.log(err, info);
  }

  fetchWeather = async () => {
    this.toggleLoader();

    try {
      const weather = await getWeather(this.state.city);

      this.setState({ weather });
    } catch (err) {
      console.log("fetchWeather", err);
    } finally {
      this.toggleLoader();
    }
  };

  toggleLoader = () => {
    this.setState((prevState) => {
      return { isLoading: !prevState.isLoading };
    });
  };

  render() {
    const { weather, isLoading } = this.state;

    const isNotEmptyWeather = Object.keys(weather).length !== 0;

    console.log("render", isNotEmptyWeather);

    return (
      <Container maxWidth="sm" sx={{ padding: 2 }} className="App">
        {isNotEmptyWeather && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <CurrentWeather
              current={weather.current}
              location={weather.location}
            />
            <ForecastWeather forecast={weather.forecast} />
          </Box>
        )}
        {isLoading && <Loader />}
      </Container>
    );
  }
}
