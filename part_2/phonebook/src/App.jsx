import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import phonebookServices from "./phonebookServices";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState(null);
  const [isError, setIsError] = useState(false);

  const fetchPersons = () => {
    phonebookServices.getAll().then((res) => {
      setPersons(res);
    });
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const [searchField, setSearchField] = useState("");

  const filteredPersons = searchField
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(searchField.toLowerCase())
      )
    : persons;

  const handleNotification = (message, isErr) => {
    setNotification(message);
    setIsError(isErr);
    setTimeout(() => {
      setNotification(null);
      setIsError(false);
    }, 5000);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={notification} isError={isError} />
      <Filter searchField={searchField} setSearchField={setSearchField} />
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        handleNotification={handleNotification}
      />
      <h2>Numbers</h2>
      <Persons
        persons={filteredPersons}
        setPersons={setPersons}
        handleNotification={handleNotification}
      />
    </>
  );
}

export default App;
