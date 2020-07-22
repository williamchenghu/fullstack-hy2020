import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fields from './components/Fields';
import Countries from './components/Countries';

const App = () => {
  //States
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchCountries = async () => {
      try {
        await axios
          .get('https://restcountries.eu/rest/v2/all', { cancelToken: source.token })
          .then((response) => setCountries(response.data));
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Fetching countries is cancelled');
        } else {
          throw error;
        }
      }
    };

    fetchCountries();
    return () => {
      source.cancel();
    };
  }, []);

  //Event handlers
  const handleSearchChange = (event) => setSearch(event.target.value);

  return (
    <>
      <Fields
        fieldName={'find countries'}
        newField={search}
        handleFieldChange={handleSearchChange}
      />
      <Countries countriesList={countries} filterKey={search} handelShowCountry={setSearch} />
    </>
  );
};

export default App;
