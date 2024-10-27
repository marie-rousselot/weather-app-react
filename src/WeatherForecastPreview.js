import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forcast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="Forecast-temperature">
        <span className="Forecast-temperature-max">{maxTemperature()}</span>{" "}
        <span className="Forcast-temerature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
