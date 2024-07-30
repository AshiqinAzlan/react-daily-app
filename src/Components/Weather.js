import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Weather.css";

function Weather() {
  const apiKey = "b8fc49a104ee8d080a4a40c2f6e11695";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (city) {
      try {
        const data = await getWeatherData(city);
        setWeatherData(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Could not fetch weather data");
        setWeatherData(null);
      }
    } else {
      setError("Please enter a city");
      setWeatherData(null);
    }
  };

  const getWeatherData = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Could not fetch weather data");
    }
    return await response.json();
  };

  const getWeatherEmoji = (weatherId) => {
    switch (true) {
      case weatherId >= 200 && weatherId < 300:
        return "⛈️";
      case weatherId >= 300 && weatherId < 400:
        return "🌧️";
      case weatherId >= 500 && weatherId < 600:
        return "🌨️";
      case weatherId >= 600 && weatherId < 700:
        return "❄️";
      case weatherId >= 700 && weatherId < 800:
        return "🐸";
      case weatherId === 800:
        return "☀️";
      case weatherId >= 801 && weatherId < 810:
        return "☁️";
      default:
        return "❓";
    }
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="weather-container">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="cityInput"
            placeholder="Enter City Name"
          />

          <button type="submit" className="weatherButton">
            <SearchIcon />
            Get Weather
          </button>
        </form>

        {error && <p className="errorDisplay">{error}</p>}

        {weatherData && (
          <div className="weather-container">
            <div className="card" style={{ display: "flex" }}>
              <h1 className="cityDisplay">{weatherData.name}</h1>
              <p className="tempDisplay">{weatherData.main.temp}°C</p>
              <p className="humidityDisplay">
                Humidity: {weatherData.main.humidity}%
              </p>
              <p className="descDisplay">
                {weatherData.weather[0].description}
              </p>
              <p className="weatherEmoji">
                {getWeatherEmoji(weatherData.weather[0].id)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
