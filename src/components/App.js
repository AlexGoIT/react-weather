import { Component } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import Loader from "./Loader/Loader";

import getWeather from "../services/weather-api";

export default class App extends Component {
  state = {
    location: {},
    current: {},
    forecastday: {},
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
      this.fetchWeather(city);
    }
  }

  componentDidCatch(err, info) {
    console.log(err, info);
  }

  fetchWeather = async () => {
    this.toggleLoader();

    try {
      const data = await getWeather(this.state.city);

      const {
        location,
        current,
        forecast: { forecastday },
      } = data;

      this.setState({ current, forecastday, location });
    } catch (err) {
      console.log(err);
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
    const { current, location, forecastday, isLoading } = this.state;

    const isNotEmptyCurrent = Object.keys(current).length !== 0;
    const isNotEmptyLocation = Object.keys(location).length !== 0;

    return (
      <Container maxWidth="sm" sx={{ padding: 2 }} className="App">
        {isNotEmptyCurrent && isNotEmptyLocation && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <CurrentWeather currentWeather={current} location={location} />
            <ForecastWeather forecastday={forecastday} />
          </Box>
        )}
        {isLoading && <Loader />}
      </Container>
    );
  }
}
