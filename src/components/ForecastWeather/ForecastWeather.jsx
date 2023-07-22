import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Box from "@mui/material/Box";

import { datetimeConverter } from "../../utils/converter";

const ForecastWeather = ({ forecastday }) => {
  return forecastday.map((day) => {
    return (
      <Accordion
        sx={{
          background:
            "linear-gradient(0deg, rgba(255,247,127,1) 0%, rgba(109,156,255,1) 100%)",
          borderRadius: 2,
          padding: 1,
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
          "&.Mui-expanded": { margin: 0 },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{datetimeConverter(day.date_epoch)}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
};

export default ForecastWeather;
