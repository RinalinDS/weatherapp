export const getTime = (sunsetTimeInNumber: number, sunriseTimeInNumber: number) => {
  const thousandForCorrectDateTransorm = 1000;
  const sunset = new Date(sunsetTimeInNumber * thousandForCorrectDateTransorm);
  const sunrise = new Date(sunriseTimeInNumber * thousandForCorrectDateTransorm);
  const hoursSunrise = sunrise.getHours();
  const minutesSunrise = sunrise.getMinutes();
  const hoursSunset = sunset.getHours();
  const minutesSunset = sunset.getMinutes();

  const sunsetTime = `${hoursSunset}:${minutesSunset}`;
  const sunriseTime = `${hoursSunrise}:${minutesSunrise}`;

  return [sunsetTime, sunriseTime];
};
