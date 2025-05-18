import React from "react";

const CountryListItem = ({ countryName, onClick }) => {
  return (
    <li>
      <span>{countryName}</span>
      <button onClick={onClick}>Show</button>
    </li>
  );
};

export default CountryListItem;
