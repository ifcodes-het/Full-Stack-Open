import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null);

  const fetchWeatherDetails = () => {
    const capital = country.capital[0];
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`
      )
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => {
        console.error("Error fetching weather details:", err);
      });
  };

  useEffect(() => {
    fetchWeatherDetails();
  }, [country]);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={`${country.name.common} flag`}
          />
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
