import Forecasthour from "../Forecasthour";
import Slider from "react-slick";
import "./slick.css";

export default function Forecastday({ hours }) {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    // adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      {hours.map((hour) => (
        <Forecasthour key={hour.time_epoch} hour={hour} />
      ))}
    </Slider>
  );
}
