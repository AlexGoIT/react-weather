import { Component } from "react";
import "./App.css";

import getWeather from "../services/weather-api";

import CurrentWeather from "./CurrentWeather";
import Loader from "./Loader/Loader";

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
    const { current, location, isLoading } = this.state;

    const isNotEmptyCurrent = Object.keys(current).length !== 0;
    const isNotEmptyLocation = Object.keys(location).length !== 0;

    return (
      <div className="App">
        {isNotEmptyCurrent && isNotEmptyLocation && (
          <CurrentWeather currentWeather={current} location={location} />
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}
