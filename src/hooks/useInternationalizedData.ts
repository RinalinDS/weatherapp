import { CurrentForecastType } from '../types/CurrentForecastType';
import { HourlyForecastList } from '../types/DailyForecastType';

export const useInternationalizedData = (
  forecast: CurrentForecastType | HourlyForecastList,
) => {
  const locale = navigator.language;
  const optionsCelsius = {
    style: 'unit',
    unit: 'celsius',
    maximumFractionDigits: 0,
  };
  const temp = new Intl.NumberFormat(locale, optionsCelsius).format(forecast?.main?.temp);
  const feelsLike = new Intl.NumberFormat(locale, optionsCelsius).format(
    forecast?.main?.feels_like,
  );
  const windSpeed = new Intl.NumberFormat(locale, {
    style: 'unit',
    unit: 'meter-per-second',
    maximumFractionDigits: 0,
  }).format(forecast?.wind?.speed);
  const pressure = new Intl.NumberFormat(locale, {
    style: 'unit',
    unit: 'millimeter',
    maximumFractionDigits: 0,
  }).format(forecast?.main?.pressure);

  return { temp, feelsLike, windSpeed, pressure };
};
