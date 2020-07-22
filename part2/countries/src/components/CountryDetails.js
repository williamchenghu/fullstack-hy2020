import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetails = ({ countryToShow }) => {
  // States
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const weather_api_key = process.env.REACT_APP_WEATHERSTACK_API_KEY;
    const source = axios.CancelToken.source();
    const fetchWeather = async () => {
      try {
        await axios
          .get(
            `http://api.weatherstack.com/current?access_key=${weather_api_key}&query=${countryToShow.capital}&units=m`,
            { cancelToken: source.token }
          )
          .then((response) => {
            setWeather(response.data);
            setLoading(false);
          });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Fetching weather data is cancelled');
        } else {
          throw error;
        }
      }
    };

    fetchWeather();
    return () => {
      source.cancel();
    };
  }, [countryToShow]);

  return (
    <>
      <h1>{countryToShow.name}</h1>
      <div>capital {countryToShow.capital}</div>
      <div>population {countryToShow.population}</div>
      <h3>languages</h3>
      <ul>
        {countryToShow.languages.map((e) => (
          <li key={e.name}>{e.name}</li>
        ))}
      </ul>
      <img
        src={countryToShow.flag}
        alt={`flag of ${countryToShow.name}`}
        style={{ maxWidth: '20%' }}
      />
      <h3>Weather in {countryToShow.capital}</h3>
      {loading ? (
        <div>Checking weather...</div>
      ) : (
        <>
          <div>temperature: {weather.current.temperature} Celcius</div>
          {weather.current.weather_icons.map((e) => (
            <img src={e} alt={'weatherIcons'} key={e} />
          ))}
          <div>
            wind: {weather.current.wind_speed} kph direction {weather.current.wind_dir}
          </div>
        </>
      )}
    </>
  );
};

export default CountryDetails;
