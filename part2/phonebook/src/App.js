import React, { useState, useEffect } from 'react';
import Fields from './components/Fields';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import dataAPI from './services/data';

const App = () => {
  //States
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
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
    persons.find((e) => newName === e.name)
      ? alert(`${newName} is already added to phonebook`)
      : dataAPI
          .create(personObject)
          .then((returnedData) => setPersons(persons.concat(returnedData)));
    setNewName('');
    setNewNumber('');
  };

  const deletePerson = (id) =>
    window.confirm(`Delete ${persons.find((e) => id === e.id).name} ?`) &&
    (dataAPI.deleteEntry(id), setPersons(persons.filter((e) => e.id !== id)));

  return (
    <div>
      <h2>Phonebook</h2>
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
