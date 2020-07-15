import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

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

  const fields = (fieldName, newField, handleFieldChange) => (
    <div>
      {fieldName}: <input value={newField} onChange={handleFieldChange} />
    </div>
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        {fields('name', newName, handleNameChange)}
        {fields('number', newNumber, handleNumberChange)}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((e) => (
        <div key={e.name}>
          {e.name} {e.number}
        </div>
      ))}
    </div>
  );
};

export default App;
