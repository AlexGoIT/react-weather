import { Component } from "react";
import "./App.css";

import getWeather from "../services/weather-api";

import CurrentWeather from "./CurrentWeather";

export default class App extends Component {
  state = {
    location: {},
    current: {},
    forecastday: {},
    city: "",
    update: false,
  };

  componentDidMount() {
    this.setState({ city: "Kryvyy Rih" });

    // setInterval(() => {
    //   this.setState((prevState) => {
    //     return { update: !prevState.update };
    //   });
    // }, 300000);
  }

  componentDidUpdate(_, prevState) {
    const { city, update } = this.state;

    if (prevState.update !== update || prevState.city !== city) {
      this.fetchWeather(city);
    }
  }

  fetchWeather = async () => {
    try {
      const data = await getWeather(this.state.city);

      console.log(data);

      const {
        location,
        current,
        forecast: { forecastday },
      } = data;

      this.setState({ current, forecastday, location });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { current, location } = this.state;

    return (
      <div className="App">
        <CurrentWeather currentWeather={current} location={location} />
      </div>
    );
  }
}
