import React from "react";

const Filter = ({ searchField, setSearchField }) => {
  return (
    <div>
      <label htmlFor="search">Search:</label>{" "}
      <input
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
    </div>
  );
};

export default Filter;
