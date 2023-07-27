import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordion, accordionSummary } from "./settings";

import { datetimeConverter } from "../../utils/converter";

import Forecastday from "../Foracastday/Forecastday";
import {
  ForecastWeatherContent,
  ForecastWeatherDate,
  ForecastWheatherTempBox,
  ForecastWheatherTempMax,
  ForecastWheatherTempMin,
  ForecastWheatherIcon,
  ForecastWheatherText,
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
            <ForecastWheatherTempBox>
              <ForecastWheatherTempMax>
                max {forecastday.day.maxtemp_c}℃
              </ForecastWheatherTempMax>
              <ForecastWheatherTempMin>
                min {forecastday.day.mintemp_c}℃
              </ForecastWheatherTempMin>
            </ForecastWheatherTempBox>
            <ForecastWheatherIcon
              src={forecastday.day.condition.icon}
              alt={forecastday.day.condition.text}
            />
            <ForecastWheatherText>
              {forecastday.day.condition.text}
            </ForecastWheatherText>
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
