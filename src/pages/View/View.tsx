import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import styles from './View.module.css';

import { useAppSelector } from 'hooks/useAppHooks';
import { CityWeatherType } from 'types/APIWeatherType';
import { CountryStateType } from 'types/StateTypes';
import { getTime } from 'utils/getTime';

export const View = () => {
  const { city } = useParams();
  const forecast = useAppSelector<CityWeatherType>(
    state => state.weather.forecast[city!],
  );
  const [country, setCountry] = useState<CountryStateType>({} as CountryStateType);
  const [sunsetTime, sunriseTime] = getTime(
    forecast?.sys?.sunset,
    forecast?.sys?.sunrise,
  );
  const weatherIcon =
    `http://openweathermap.org/img/wn/${forecast?.weather[0]?.icon}@2x.png` || '';

  useEffect(() => {
    const code = forecast?.sys?.country;

    if (code) {
      axios
        .get(`https://restcountries.com/v2/alpha/${code}?fields=flags,name`)
        .then(({ data }) => setCountry(data));
    }
  }, [forecast?.sys?.country]);

  return (
    <div>
      <div className={styles.container}>
        <h2>
          {city} , {country ? country.name : ''} ,{' '}
          <img
            src={country?.flags?.svg}
            style={{
              width: '40px',
              height: '20px',
            }}
            alt="Country flag"
          />
        </h2>
        <div>
          <img src={weatherIcon} alt="weather icon" />
        </div>
        <div>
          <ul>
            <li>
              Temperature:
              {forecast?.main?.temp} °C
            </li>
            <li>
              Feels like:
              {forecast?.main?.feels_like} °C
            </li>
            <li>
              Wind speed:
              {forecast?.wind?.speed} m/s
            </li>
            <li>
              Pressure:
              {forecast?.main?.pressure} mm
            </li>
            <li>
              Humidity:
              {forecast?.main?.humidity}%
            </li>
            <li>
              Sunset:
              {sunsetTime || ''}
            </li>
            <li>
              Sunrise:
              {sunriseTime || ''}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
