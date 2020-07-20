import React from 'react';

const Fields = ({ fieldName, newField, handleFieldChange }) => (
  <div>
    {fieldName}: <input value={newField} onChange={handleFieldChange} />
  </div>
);

export default Fields;
