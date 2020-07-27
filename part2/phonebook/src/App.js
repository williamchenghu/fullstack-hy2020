import React, { useState, useEffect } from 'react';
import Fields from './components/Fields';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import dataAPI from './services/data';

const messagePositive = {
  color: 'green',
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const messageNegative = {
  color: 'red',
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const App = () => {
  //States
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [message, setMessage] = useState('');
  const [messageStyle, setMessageStyle] = useState({});
  //Event handlers
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setNewFilter(event.target.value);

  useEffect(() => {
    const fetchPersons = async () => {
      await dataAPI.getAll().then((initialData) => setPersons(initialData));
    };

    fetchPersons();
    return () => dataAPI.cancelToken();
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    const matchPerson = persons.find((e) => newName === e.name);

    matchPerson
      ? window.confirm(
          `${matchPerson.name} is already added to phonebook, replace the old number with a new one?`
        ) &&
        dataAPI
          .update(matchPerson.id, { ...matchPerson, number: newNumber })
          .then((returnedData) =>
            setPersons(
              persons.map((e) => (e.id !== matchPerson.id ? e : returnedData))
            )
          )
          .catch((error) => {
            setMessageStyle(messageNegative);
            setMessage(
              `Information of ${matchPerson.name} has already been removed from server`
            );
            setTimeout(() => {
              setMessage(null);
            }, 3000);
            setPersons(persons.filter((e) => e.id !== matchPerson.id));
          })
      : dataAPI.create(personObject).then((returnedData) => {
          setPersons(persons.concat(returnedData));
          console.log('returnedName', returnedData.name);
          setMessageStyle(messagePositive);
          setMessage(`Added ${returnedData.name}`);
          setTimeout(() => {
            setMessage(null);
          }, 1500);
        });
    setNewName('');
    setNewNumber('');
  };

  const deletePerson = (id) =>
    window.confirm(`Delete ${persons.find((e) => id === e.id).name} ?`) &&
    (dataAPI.deleteEntry(id), setPersons(persons.filter((e) => e.id !== id)));

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageStyle={messageStyle} />
      <Fields
        fieldName="filter shown with"
        newField={newFilter}
        handleFieldChange={handleFilterChange}
      />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        addName={newName}
        addNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        personList={persons}
        filterKey={newFilter}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
