import { useEffect, useState } from 'react';
import { HourlyForecastList } from '../types/DailyForecastType';

export const useDetailedForecastListData = (element: HourlyForecastList) => {
  let [date, time] = element.dt_txt.split(' ');
  let [weatherIcon, setWeatherIcon] = useState('');
  // i'm not sure if i need useEffect , but it feels like it's get request , so ? i don't know.
  let etime = time.slice(0, -3);
  // to cut seconds

  useEffect(() => {
    const icon = element.weather[0]?.icon
      ? `http://openweathermap.org/img/wn/${element.weather[0]?.icon}@2x.png`
      : '';
    setWeatherIcon(icon);
  }, []);

  return { date, etime, weatherIcon };
};
