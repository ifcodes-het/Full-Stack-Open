import React from "react";
import phonebookServices from "../phonebookServices";

const Persons = ({ persons, setPersons }) => {
  const handleDelete = (person) => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      phonebookServices.remove(person.id).then((res) => {
        setPersons(persons.filter((person) => person.id !== res.id));
      });
    }
  };

  return (
    <div>
      {persons.map((person) => (
        <div key={person.name}>
          <p>
            {person.name} {person.phoneNumber}
          </p>
          <button onClick={() => handleDelete(person)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
