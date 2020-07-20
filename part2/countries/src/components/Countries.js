import React from 'react';

const Countries = ({ countriesList, filterKey }) => {
  const filterCountries = countriesList.filter((e) =>
    e.name.toLowerCase().includes(filterKey.toLowerCase())
  );
  const filterResult = filterCountries.length;

  return (
    <>
      {filterResult > 10 ? (
        <div>Too many matches, specify another filter</div>
      ) : filterResult > 1 ? (
        filterCountries.map((e) => <div key={e.name}>{e.name}</div>)
      ) : (
        (console.log('filterResult', filterCountries),
        filterResult > 0 && (
          <>
            <h1>{filterCountries[0].name}</h1>
            <div>capital {filterCountries[0].capital}</div>
            <div>population {filterCountries[0].population}</div>
            <h3>languages</h3>
            <ul>
              {filterCountries[0].languages.map((e) => (
                <li key={e.name}>{e.name}</li>
              ))}
            </ul>
            <img
              src={filterCountries[0].flag}
              alt={`flag of ${filterCountries[0].name}`}
              style={{ maxWidth: '20%' }}
            />
          </>
        ))
      )}
    </>
  );
};

export default Countries;
