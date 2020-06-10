import React from "react";

const WeatherCard = ({
  max_temp,
  min_temp,
  temp,
  datetime,
  wind_cdir_full,
  sunrise_ts,
  sunset_ts,
  ts,
}) => {
  const sunset = new Date(sunset_ts * 1000).toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "2-digit",
  });
  const sunrise = new Date(sunrise_ts * 1000).toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "2-digit",
  });
  return (
    <div className="weather">
      <ul className="time">
        <li>
          {new Date(ts * 1000).toLocaleString("en-US", {
            weekday: "long",
          })}
        </li>
        <li>Sunrise: {sunrise}</li>
        <li>Sunset: {sunset}</li>
      </ul>
      <ul className="temp">
        <li>Max:{max_temp} &#8451;</li>
        <li> Temp: {temp} &#8451;</li>
        <li> Min: {min_temp} &#8451;</li>
      </ul>
      <ul className="wind">
        <li> Wind: </li>
        <li> {wind_cdir_full.toUpperCase()} </li>
      </ul>
    </div>
  );
};

export default WeatherCard;
