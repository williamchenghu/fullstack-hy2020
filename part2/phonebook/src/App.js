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
  const styledMessage = (style, message) => {
    setMessageStyle(style);
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  useEffect(() => {
    const fetchPersons = async () => {
      await dataAPI.getAll().then((initialData) => setPersons(initialData));
    };

    fetchPersons();
    return () => dataAPI.cancelToken();
  }, []);

  const editPerson = (existingPerson) => {
    if (
      window.confirm(
        `${existingPerson.name} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      return dataAPI
        .update(existingPerson.id, { ...existingPerson, number: newNumber })
        .then((returnedData) =>
          setPersons((persons) =>
            persons.map((e) => (e.id !== existingPerson.id ? e : returnedData))
          )
        )
        .catch((error) => {
          styledMessage(messageNegative, `${error.response.data.error}`);
          setPersons(persons.filter((e) => e.id !== existingPerson.id));
        });
    }
  };

  const createPerson = () => {
    dataAPI
      .create({
        name: newName,
        number: newNumber,
      })
      .then((returnedData) => {
        setPersons(persons.concat(returnedData));
        styledMessage(messagePositive, `Added ${returnedData.name}`);
      })
      .catch((error) => {
        styledMessage(messageNegative, `${error.response.data.error}`);
      });
  };

  const resetInput = () => {
    setNewName('');
    setNewNumber('');
  };

  const updatePhonebook = (event) => {
    event.preventDefault();
    // catch missing input
    if (!newName || !newNumber) {
      return styledMessage(
        messageNegative,
        'Missing Name or Number to add the person'
      );
    }
    //find match of input person from current phonebook
    const matchPerson = persons.find((e) => newName === e.name);
    //if input person already exists
    if (matchPerson) {
      editPerson(matchPerson);
    } else {
      //otherwise create the input person
      createPerson();
    }
    //reset input fields
    resetInput();
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
        updatePhonebook={updatePhonebook}
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
