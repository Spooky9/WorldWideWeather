import React from "react";

const Weather = props => (
  <div className="weather-comp">
    <div className="container">
      <div className="row">
        <div className="col text-center">
          {props.city && props.country && (
            <p className="text-center location m-0">
              {props.city}, {props.country}
            </p>
          )}
          {props.description && (
            <p className="description">{props.description}</p>
          )}
          {props.description && (
            <div id="icon">
              <img
                id="wicon"
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt="Weather Icon"
              />
            </div>
          )}
          {props.temperature && (
            <p className="temp">{props.temperature}&deg;</p>
          )}
          {props.maxTemp && (
            <span className="highLowTemp">{props.maxTemp}&deg;</span>
          )}
          {props.minTemp && (
            <span className="highLowTemp">{props.minTemp}&deg;</span>
          )}
        </div>
        <div className="col right-col">
          {props.humidity && <p>Humidity: {props.humidity}%</p>}
          {props.windSpeed && <p>Wind Speed: {props.windSpeed} mph</p>}
        </div>
      </div>
    </div>

    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
