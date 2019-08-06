import React from "react";

const Weather = props => (
  <div className="weather-comp text-center">
    <div className="container">
      <div className="row">
        <div class="col">
          {props.city && props.country && (
            <p className="text-center location m-0">
              {props.city}, {props.country}
            </p>
          )}
          {props.description && (
            <p className="description">{props.description}</p>
          )}
          {props.temperature && (
            <p className="temp">{props.temperature}&deg;F</p>
          )}
          {props.maxTemp && (
            <span className="highLowTemp">{props.maxTemp}&deg;F</span>
          )}
          {props.minTemp && (
            <span className="highLowTemp">{props.minTemp}&deg;F</span>
          )}
        </div>
        <div className="col">
          {props.humidity && (
            <p className="humidity">Humidity: {props.humidity}%</p>
          )}
        </div>
      </div>
    </div>

    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
