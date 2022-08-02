export const getTime = (sunsetTimeInNumber: number, sunriseTimeInNumber: number) => {
  const thousandForCorrectDateTransform = 1000;
  const sunset = new Date(sunsetTimeInNumber * thousandForCorrectDateTransform);
  const sunrise = new Date(sunriseTimeInNumber * thousandForCorrectDateTransform);
  const hoursSunrise = get2digitString(sunrise.getHours());
  const minutesSunrise = get2digitString(sunrise.getMinutes());
  const hoursSunset = get2digitString(sunset.getHours());
  const minutesSunset = get2digitString(sunset.getMinutes());

  const sunsetTime = `${hoursSunset}:${minutesSunset}`;
  const sunriseTime = `${hoursSunrise}:${minutesSunrise}`;

  return [sunsetTime, sunriseTime];
};

export const get2digitString = (num: number) => {
  const ten = 10;

  return num < ten ? `0${num}` : num;
};
