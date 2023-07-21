import { render } from "@testing-library/react";
import PropTypes from "prop-types";
import { Component } from "react";

import { datetimeConverter } from "../../utils/converter";

import { CurrentWeatherContainer } from "./CurrentWeather.styled";

class CurrentWeather extends Component {
  static defaultProps = {
    currentWeather: {
      condition: {
        text: "",
        icon: "",
      },
      temp_c: 0,
      last_updated_epoch: 0,
    },
    location: {
      name: "",
      region: "",
      country: "",
    },
  };

  render() {
    const {
      condition: { text, icon },
      temp_c,
      last_updated_epoch,
    } = this.props.currentWeather;
    const { name, region, country } = this.props.location;
    return (
      <CurrentWeatherContainer>
        <h1 className="location-name">{name}</h1>
        <h2 className="location-region">{region}</h2>
        <h3 className="location-country">{country}</h3>
        <img className="weather-icon" src={icon} alt={text} />
        <p className="weather-text">{text}</p>
        <p className="weather-temp_c">{temp_c}</p>
        <p className="weather-last-update">
          {datetimeConverter(last_updated_epoch)}
        </p>
      </CurrentWeatherContainer>
    );
  }
}

export default CurrentWeather;

// CurrentWeather.propTypes = {
//   currentWeather: PropTypes.shape({
//     condition: PropTypes.shape({
//       text: PropTypes.string.isRequired,
//       icon: PropTypes.string.isRequired,
//     }).isRequired,
//     temp_c: PropTypes.number.isRequired,
//     last_updated_epoch: PropTypes.number.isRequired,
//   }),
//   location: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     region: PropTypes.string.isRequired,
//     country: PropTypes.string.isRequired,
//   }).isRequired,
// };
