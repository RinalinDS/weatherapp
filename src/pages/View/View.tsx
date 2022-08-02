import React, {memo, useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import styles from './View.module.css'


import {useAppSelector} from "hooks/useAppHooks";
import {CityWeatherType} from "types/APIWeatherType";
import axios from 'axios';

type useStateType = {
  flags: {
    png: string
    svg: string
  }
  name: string
}

export const View = memo(() => {
  const [country, setCountry] = useState<useStateType>({} as useStateType)
  const {city} = useParams();
  const forecast = useAppSelector<CityWeatherType>(
    (state) => state.weather.forecast[city!]
  );
  useEffect(() => {
    const code = forecast?.sys?.country
    if (code) axios.get(`https://restcountries.com/v2/alpha/${code}?fields=flags,name`).then(({data}) => setCountry(data))

  }, [forecast?.sys?.country])


  const icon = forecast?.weather[0]?.icon
  const sunset = new Date(forecast?.sys?.sunset * 1000)
  const sunrise = new Date(forecast?.sys?.sunrise * 1000)
  const hoursSunrise = sunrise.getHours()
  const minutesSunrise = sunrise.getMinutes()
  const hoursSunset = sunset.getHours()
  const minutesSunset = sunset.getMinutes()


  return (
    <div>
      <div className={styles.container}>
        <h2>{city} , {country ? country.name : ''} , <img src={country?.flags?.svg}
                                                          style={{
                                                            width: '40px',
                                                            height: '20px'
                                                          }} alt={'Country flag'}/></h2>
        <div><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={'weather icon'}/></div>
        <div>
          <ul>
            <li>Temperature: {forecast?.main?.temp} °C</li>
            <li>Feels like: {forecast?.main?.feels_like} °C</li>
            <li>Wind speed: {forecast?.wind?.speed} mp/h</li>
            <li>Pressure: {forecast?.main?.pressure} mm</li>
            <li>Humidity: {forecast?.main?.humidity}%</li>
            <li>Sunset: {hoursSunrise}:{minutesSunrise}</li>
            <li>Sunrise: {hoursSunset}:{minutesSunset}</li>
          </ul>
        </div>
      </div>
    </div>
  );
});
