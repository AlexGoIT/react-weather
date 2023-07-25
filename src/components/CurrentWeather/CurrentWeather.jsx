import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import { datetimeConverter } from "../../utils/converter";
import {
  City,
  Region,
  Country,
  LastUpdate,
  Icon,
  TempC,
  Text,
} from "./CurrentWeather.styled";

const CurrentWeather = ({ current, location }) => {
  const {
    condition: { text, icon },
    temp_c,
    last_updated_epoch,
  } = current;
  const { name, region, country } = location;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        background:
          "linear-gradient(0deg, rgba(255,247,127,1) 0%, rgba(109,156,255,1) 100%)",
        borderRadius: 2,
        padding: 1,
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 0.5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <City>{name}</City>
          <Country>{country}</Country>
          <Region>{region}</Region>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TempC>{temp_c} ℃</TempC>
            <Text>{text}</Text>
          </Box>
          <Icon src={icon} alt={text} />
        </Box>
      </Box>
      <LastUpdate>
        Last updated: {datetimeConverter(last_updated_epoch)}
      </LastUpdate>
    </Box>
  );
};

export default CurrentWeather;

CurrentWeather.propTypes = {
  currentWeather: PropTypes.shape({
    condition: PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
    temp_c: PropTypes.number.isRequired,
    last_updated_epoch: PropTypes.number.isRequired,
  }),
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};
