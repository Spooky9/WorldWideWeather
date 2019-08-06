import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "9f501b935b9237651d41969cfc53cf6d";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    minTemp: undefined,
    maxTemp: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: Math.round(data.main.temp),
        minTemp: Math.round(data.main.temp_min),
        maxTemp: Math.round(data.main.temp_max),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description:
          data.weather[0].description.charAt(0).toUpperCase() +
          data.weather[0].description.slice(1),
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "ERROR: Enter valid values"
      });
    }
  };
  render() {
    return (
      <div className="bg">
        <Titles />
        <div className="font-style container-fluid">
          <Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            minTemp={this.state.minTemp}
            maxTemp={this.state.maxTemp}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}
export default App;
