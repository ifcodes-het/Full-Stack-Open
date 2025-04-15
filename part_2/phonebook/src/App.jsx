import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: "080-123456" },
  ]);
  const [searchField, setSearchField] = useState("");

  const filteredPersons = searchField
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(searchField.toLowerCase())
      )
    : persons;

  return (
    <>
      <h2>Phonebook</h2>
      <Filter searchField={searchField} setSearchField={setSearchField} />
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </>
  );
}

export default App;
