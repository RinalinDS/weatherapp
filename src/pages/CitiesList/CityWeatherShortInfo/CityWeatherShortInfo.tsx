import React, {FC, memo, SyntheticEvent} from "react";

import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

import styles from "./CityWeatherShortInfo.module.css";

import { useAppDispatch } from "hooks/useAppHooks";
import { requestCurrentWeather } from "store/reducers/WeatherReducer";
import { CityWeatherType } from "types/APIWeatherType";

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
              <Delete fontSize="small" />
            </IconButton>
          </div>
          <div>
            <p>Temp: {forecastForCity?.main?.temp}</p>
            <p>Speed: {forecastForCity?.wind?.speed}</p>
            <p>Pressure: {forecastForCity?.main?.pressure}</p>
          </div>
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
