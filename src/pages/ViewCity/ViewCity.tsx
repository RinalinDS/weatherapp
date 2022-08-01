import React, { memo } from "react";

import { useParams } from "react-router-dom";

import styles from "../CitiesList/CityWeatherShortInfo/CityWeatherShortInfo.module.css";

import { useAppSelector } from "hooks/useAppHooks";
import { CityWeatherType } from "types/APIWeatherType";

export const ViewCity = memo(() => {
  const { city } = useParams();
  const forecast = useAppSelector<CityWeatherType>(
    (state) => state.weather.forecast[city!]
  );

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>{city}</h3>
          <div>
            <p>Temp: {forecast?.main?.temp}</p>
            <p>Speed: {forecast?.wind?.speed}</p>
            <p>Pressure: {forecast?.main?.pressure}</p>
            <p>Feels like: {forecast?.main?.feels_like}</p>
            <p>Humidity: {forecast?.main?.humidity}</p>
          </div>
        </div>
      </div>
    </div>
  );
});
