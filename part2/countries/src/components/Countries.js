import React from 'react';
import CountryDetails from './CountryDetails';

const Countries = ({ countriesList, filterKey, handelShowCountry }) => {
  const filterCountries = countriesList.filter((e) =>
    e.name.toLowerCase().includes(filterKey.toLowerCase())
  );
  const filterResult = filterCountries.length;

  return (
    <>
      {filterResult > 10 && <div>Too many matches, specify another filter</div>}
      {filterResult > 1 &&
        filterResult < 11 &&
        filterCountries.map((e) => (
          <div key={e.name}>
            {e.name} <button onClick={() => handelShowCountry(e.name)}>show</button>
          </div>
        ))}
      {filterResult === 1 && <CountryDetails countryToShow={filterCountries[0]} />}
      {filterResult < 1 && <div>No country found</div>}
    </>
  );
};

export default Countries;
