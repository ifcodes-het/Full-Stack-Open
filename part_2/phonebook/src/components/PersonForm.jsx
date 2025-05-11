import React from "react";
import { useState } from "react";
import phonebookServices from "../phonebookServices";

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

  const generateId = () => {
    const maxId =
      persons.length > 0 ? Math.max(...persons.map((p) => Number(p.id))) : 1;
    return (maxId + 1).toString();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isContactNameExists(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      phoneNumber: phoneNumber,
      id: generateId(),
    };

    phonebookServices.create(newPerson).then((res) => {
      console.log({ res });
      setPersons(persons.concat(res));
    });

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
