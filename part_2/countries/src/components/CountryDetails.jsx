import React from "react";

const CountryDetails = ({ country }) => {
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
      <h2>Weather in {country.weather.name}</h2>
      <p>Temperature: {country.weather.main.temp} °C</p>
      <img
        src={`https://openweathermap.org/img/wn/${country.weather.weather[0].icon}@2x.png`}
        alt={`${country.name.common} flag`}
      />
      <p>Wind: {country.weather.wind.speed} m/s</p>
    </div>
  );
};

export default CountryDetails;
