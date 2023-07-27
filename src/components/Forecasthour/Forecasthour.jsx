import { timeConverter } from "../../utils/converter";
import {
  ForecastTime,
  ForecastTempC,
  ForecastIcon,
  ForecastText,
} from "./Forecasthour.styled";

export default function Forecasthour({ hour }) {
  return (
    <>
      <ForecastTime>{timeConverter(hour.time_epoch)}</ForecastTime>
      <ForecastTempC>{hour.temp_c}℃</ForecastTempC>
      <ForecastIcon src={hour.condition.icon} alt={hour.condition.text} />
      <ForecastText>{hour.condition.text}</ForecastText>
    </>
  );
}
