import React from 'react';

const Persons = ({ personList, filterKey, deletePerson }) =>
  personList
    .filter((e) => e.name.toLowerCase().includes(filterKey.toLowerCase()))
    .map((e) => (
      <div key={e.name}>
        {e.name} {e.number}{' '}
        <button onClick={() => deletePerson(e.id)}>delete</button>
      </div>
    ));

export default Persons;
