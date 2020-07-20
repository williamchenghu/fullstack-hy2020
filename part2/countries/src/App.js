import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fields from './components/Fields';
import Countries from './components/Countries';

const App = () => {
  //States
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('start fetching data');
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      console.log('promise fulfilled');
      setCountries(response.data);
    });
  }, []);
  console.log('fetched', countries.length, 'countries');

  //Event handlers
  const handleSearchChange = (event) => setSearch(event.target.value);

  return (
    <>
      <Fields
        fieldName={'find countries'}
        newField={search}
        handleFieldChange={handleSearchChange}
      />
      <Countries countriesList={countries} filterKey={search} />
    </>
  );
};

export default App;
