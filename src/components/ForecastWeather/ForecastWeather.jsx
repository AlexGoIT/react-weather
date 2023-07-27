import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordion } from "./settings";

import { datetimeConverter } from "../../utils/converter";

import Forecastday from "../Foracastday/Forecastday";
import {
  ForecastWeatherContent,
  ForecastWeatherDate,
  ForecastWeatherTempBox,
  ForecastWeatherTempMax,
  ForecastWeatherTempMin,
  ForecastWeatherIcon,
  ForecastWeatherText,
} from "./ForecastWeather.styled.js";

const ForecastWeather = ({ forecast: { forecastday } }) => {
  return forecastday.map((forecastday, id) => {
    return (
      <Accordion key={id} sx={accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          // sx={accordionSummary}
        >
          <ForecastWeatherContent>
            <ForecastWeatherDate>
              {datetimeConverter(forecastday.date_epoch)}
            </ForecastWeatherDate>
            <ForecastWeatherTempBox>
              <ForecastWeatherTempMax>
                max {forecastday.day.maxtemp_c}℃
              </ForecastWeatherTempMax>
              <ForecastWeatherTempMin>
                min {forecastday.day.mintemp_c}℃
              </ForecastWeatherTempMin>
            </ForecastWeatherTempBox>
            <ForecastWeatherIcon
              src={forecastday.day.condition.icon}
              alt={forecastday.day.condition.text}
            />
            <ForecastWeatherText>
              {forecastday.day.condition.text}
            </ForecastWeatherText>
          </ForecastWeatherContent>
        </AccordionSummary>
        <AccordionDetails>
          <Forecastday hours={forecastday.hour} />
        </AccordionDetails>
      </Accordion>
    );
  });
};

export default ForecastWeather;
