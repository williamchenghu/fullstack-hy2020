import React, { useState } from 'react';
import Fields from './components/Fields';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  //States
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  //Event handlers
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setNewFilter(event.target.value);
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    persons.find((e) => newName === e.name)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };

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
      <Persons personList={persons} filterKey={newFilter} />
    </div>
  );
};

export default App;
