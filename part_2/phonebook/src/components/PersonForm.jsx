import React from "react";
import { useState } from "react";
import phonebookServices from "../phonebookServices";

const PersonForm = ({ persons, setPersons, handleNotification }) => {
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const existingPerson = persons.find(
    (person) => person.name.toLowerCase() === newName.toLowerCase()
  );

  const generateId = () => {
    const maxId =
      persons.length > 0 ? Math.max(...persons.map((p) => Number(p.id))) : 1;
    return (maxId + 1).toString();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already in the phonebook, replace the old number with a new one - ${phoneNumber}?`
        )
      ) {
        const updatedPerson = { ...existingPerson, phoneNumber: phoneNumber };

        phonebookServices
          .update(updatedPerson.id, updatedPerson)
          .then((res) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : res
              )
            );
          });

        setNewName("");
        setPhoneNumber("");
        handleNotification(`Contact ${newName} updated successfully`);
      }
    } else {
      const newPerson = {
        name: newName,
        phoneNumber: phoneNumber,
        id: generateId(),
      };

      phonebookServices.create(newPerson).then((res) => {
        setPersons(persons.concat(res));
      });

      setNewName("");
      setPhoneNumber("");
      handleNotification(`New contact ${newName} added successfully`);
    }
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
