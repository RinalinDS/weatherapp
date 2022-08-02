export const getTime = (sunsetTimeInNumber: number, sunriseTimeInNumber: number) => {
  const sunset = new Date(sunsetTimeInNumber * 1000)
  const sunrise = new Date(sunriseTimeInNumber * 1000)
  const hoursSunrise = sunrise.getHours()
  const minutesSunrise = sunrise.getMinutes()
  const hoursSunset = sunset.getHours()
  const minutesSunset = sunset.getMinutes()

  const sunsetTime = hoursSunset + ':' + minutesSunset
  const sunriseTime = hoursSunrise + ':' + minutesSunrise

  return [sunsetTime, sunriseTime]
}