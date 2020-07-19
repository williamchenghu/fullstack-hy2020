import React from 'react';

const Persons = ({ personList, filterKey }) => {
  return (
    <>
      {personList
        .filter((e) => e.name.toLowerCase().includes(filterKey.toLowerCase()))
        .map((e) => (
          <div key={e.name}>
            {e.name} {e.number}
          </div>
        ))}
    </>
  );
};

export default Persons;
