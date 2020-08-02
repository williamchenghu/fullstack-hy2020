import React from 'react';
import Fields from './Fields';

const PersonForm = ({
  updatePhonebook,
  addName,
  addNumber,
  handleNameChange,
  handleNumberChange,
}) => (
  <form onSubmit={updatePhonebook}>
    <Fields
      fieldName="name"
      newField={addName}
      handleFieldChange={handleNameChange}
    />
    <Fields
      fieldName="number"
      newField={addNumber}
      handleFieldChange={handleNumberChange}
    />
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;
