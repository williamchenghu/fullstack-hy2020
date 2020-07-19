import React from 'react';
import Fields from './Fields';

const PersonForm = ({ addPerson, addName, addNumber, handleNameChange, handleNumberChange }) => (
  <>
    <form onSubmit={addPerson}>
      <Fields fieldName="name" newField={addName} handleFieldChange={handleNameChange} />
      <Fields fieldName="number" newField={addNumber} handleFieldChange={handleNumberChange} />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </>
);

export default PersonForm;
