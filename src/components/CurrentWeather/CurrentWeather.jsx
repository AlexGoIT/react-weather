import PropTypes from "prop-types";

import { datetimeConverter } from "../../utils/converter";

import { CurrentWeatherContainer } from "./CurrentWeather.styled";

const CurrentWeather = ({ currentWeather, location }) => {
  const {
    condition: { text, icon },
    temp_c,
    last_updated_epoch,
  } = currentWeather;
  const { name, region, country } = location;

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
};

export default CurrentWeather;

CurrentWeather.propTypes = {
  currentWeather: PropTypes.shape({
    condition: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
    }),
    temp_c: PropTypes.number,
    last_updated_epoch: PropTypes.number,
  }),
  location: PropTypes.shape({
    name: PropTypes.string,
    region: PropTypes.string,
    country: PropTypes.string,
  }),
};
