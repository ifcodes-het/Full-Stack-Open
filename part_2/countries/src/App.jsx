import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CountryDetails from "./components/CountryDetails";
import CountryListItem from "./components/CountryListItem";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const fetchCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.error("Error fetching countries:", err);
      });
  };

  useEffect(fetchCountries, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    setSelectedCountry(null);
  };

  console.log({ selectedCountry });

  const filteredCountries = searchField
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchField.toLowerCase())
      )
    : countries;

  const renderCountries = () => {
    if (selectedCountry) {
      return <CountryDetails country={selectedCountry} />;
    } else if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
      return (
        <section>
          {filteredCountries.map((country) => (
            <CountryListItem
              key={country.name.common}
              countryName={country.name.common}
              onClick={() => setSelectedCountry(country)}
            />
          ))}
        </section>
      );
    } else if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      return <CountryDetails country={country} />;
    } else {
      null;
    }
  };

  return (
    <section>
      <h2>Countries</h2>
      <input
        type="text"
        placeholder="Search for a country"
        onChange={(e) => handleChange(e)}
      />
      {renderCountries()}
    </section>
  );
}

export default App;
