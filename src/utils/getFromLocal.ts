export const getCitiesFromLocalStorage = (): string[] => {
  const citiesFromLocalStorage = localStorage.getItem('cityList');

  if (citiesFromLocalStorage) {
    return JSON.parse(citiesFromLocalStorage);
  }

  return [];
};
