import React from "react";
import { useState } from "react";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const isContactNameExists = (name) => {
    return persons.some(
      (person) => person.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isContactNameExists(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = { name: newName, phoneNumber: phoneNumber };
    setPersons(persons.concat(newPerson));
    setNewName("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>{" "}
        <input value={newName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="number">Number: </label>
        <input
          id="number"
          type="tel"
          value={phoneNumber}
          onChange={handleChangeNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
