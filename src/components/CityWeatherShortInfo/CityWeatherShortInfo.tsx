import React, {FC, memo, SyntheticEvent} from "react";

import {Delete} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {NavLink} from "react-router-dom";

import styles from "./CityWeatherShortInfo.module.css";

import {useAppDispatch} from "hooks/useAppHooks";
import {requestCurrentWeather} from "store/reducers/WeatherReducer";
import {CityWeatherType} from "types/APIWeatherType";

type CityWeatherShortInfoPropsType = {
  city: string;
  forecastForCity: CityWeatherType;
  callback: (city: string) => void;
};

export const CityWeatherShortInfo: FC<CityWeatherShortInfoPropsType> = memo(({
                                                                               city,
                                                                               callback,
                                                                               forecastForCity,
                                                                             }) => {
  const dispatch = useAppDispatch();
  const callbackHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    callback(city);
  };
  const updateCityWeather = () => {
    dispatch(requestCurrentWeather(city));
  };

  return (
    <>
      <NavLink to={`/${city}`}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>{city}</h1>
            <IconButton
              size="medium"
              onClick={(e) => {
                callbackHandler(e);
              }}
            >
              <Delete fontSize="small"/>
            </IconButton>
          </div>
          <ul>
            <li>Temperature: {forecastForCity?.main?.temp} °C</li>
            <li>Feels like: {forecastForCity?.main?.feels_like} °C</li>
            <li>Wind speed: {forecastForCity?.wind?.speed} mp/h</li>
            <li>Pressure: {forecastForCity?.main?.pressure} mm</li>
          </ul>
        </div>
      </NavLink>
      <div className={styles.buttonContainer}>
        <button
          type="submit"
          className={styles.button}
          onClick={updateCityWeather}
        >
          Update
        </button>
      </div>
    </>
  );
});
