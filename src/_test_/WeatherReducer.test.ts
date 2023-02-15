import {
  requestCurrentForecast,
  requestDailyForecast,
  weatherActions,
  weatherReducer,
} from 'store/reducers/WeatherReducer';
import { ForecastStateType } from 'types/StateTypes';
import { HourlyForecastList } from '../types/DailyForecastType';

let initialState: {
  cities: string[];
  currentForecast: ForecastStateType;
  dailyForecast: HourlyForecastList[];
};

beforeEach(() => {
  initialState = {
    cities: ['Madrid', 'Kiev', 'Berlin'] as string[],
    currentForecast: {} as ForecastStateType,
    dailyForecast: [] as HourlyForecastList[],
  };
});

test('correct city should be deleted', () => {
  const endState = weatherReducer(initialState, weatherActions.deleteCity('Madrid'));

  expect(endState.cities.length).toBe(2);
  expect(endState.cities[0]).toBe('Kiev');
});

test('correct city should be added', () => {
  const endState = weatherReducer(initialState, weatherActions.addNewCity('Moscow'));

  expect(endState.cities.length).toBe(4);
  expect(endState.cities[0]).toBe('Moscow');
  expect(endState.cities[3]).toBe('Berlin');
});

test('current forecast for city should be added', () => {
  const odessaForecast = {
    coord: { lon: 30.7326, lat: 46.4775 },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    base: 'stations',
    main: {
      temp: 25.93,
      feels_like: 25.86,
      temp_min: 25.93,
      temp_max: 25.93,
      pressure: 1007,
      humidity: 49,
      sea_level: 1007,
      grnd_level: 1001,
    },
    visibility: 10000,
    wind: { speed: 3.82, deg: 164, gust: 2.53 },
    clouds: { all: 75 },
    dt: 1659351188,
    sys: { country: 'UA', sunrise: 1659321458, sunset: 1659374943 },
    timezone: 10800,
    id: 698740,
    name: 'Odesa',
    cod: 200,
  };
  const city = 'Odessa';

  const endState = weatherReducer(
    initialState,
    requestCurrentForecast.fulfilled(
      {
        currentForecast: odessaForecast,
        city,
        meta: {
          name: 'Ukraine',
          flags: {
            svg: 'https://flagcdn.com/ua.svg',
            png: 'https://flagcdn.com/w320/ua.png',
          },
        },
        initRequest: true,
      },
      '',
      { city, initRequest: true },
    ),
  );

  expect(endState.currentForecast[city]).toBeDefined();
  expect(endState.currentForecast[city].forecast.id).toBe(698740);
});

test('daily forecast for city should be added', () => {
  const madridForecast = {
    list: [
      {
        dt: 1676494800,
        main: {
          temp: 0.8,
          feels_like: -2.7,
          temp_min: 0.8,
          temp_max: 1.31,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1022,
          humidity: 47,
          temp_kf: -0.51,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n',
          },
        ],
        clouds: {
          all: 6,
        },
        wind: {
          speed: 3.19,
          deg: 47,
          gust: 4.32,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-15 21:00:00',
      },
      {
        dt: 1676505600,
        main: {
          temp: 1.7,
          feels_like: -1.52,
          temp_min: 1.7,
          temp_max: 2.28,
          pressure: 1028,
          sea_level: 1028,
          grnd_level: 1024,
          humidity: 41,
          temp_kf: -0.58,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d',
          },
        ],
        clouds: {
          all: 11,
        },
        wind: {
          speed: 3.08,
          deg: 20,
          gust: 3.6,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-02-16 00:00:00',
      },
      {
        dt: 1676516400,
        main: {
          temp: 4.4,
          feels_like: 2.52,
          temp_min: 4.4,
          temp_max: 4.4,
          pressure: 1028,
          sea_level: 1028,
          grnd_level: 1023,
          humidity: 31,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 6,
        },
        wind: {
          speed: 2.15,
          deg: 23,
          gust: 1.98,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-02-16 03:00:00',
      },
      {
        dt: 1676527200,
        main: {
          temp: 6,
          feels_like: 5.22,
          temp_min: 6,
          temp_max: 6,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1022,
          humidity: 29,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 1.4,
          deg: 104,
          gust: 1.22,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-02-16 06:00:00',
      },
      {
        dt: 1676538000,
        main: {
          temp: 6.28,
          feels_like: 5.23,
          temp_min: 6.28,
          temp_max: 6.28,
          pressure: 1028,
          sea_level: 1028,
          grnd_level: 1023,
          humidity: 31,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n',
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 1.65,
          deg: 136,
          gust: 1.51,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-16 09:00:00',
      },
      {
        dt: 1676548800,
        main: {
          temp: 6.1,
          feels_like: 4.91,
          temp_min: 6.1,
          temp_max: 6.1,
          pressure: 1029,
          sea_level: 1029,
          grnd_level: 1024,
          humidity: 39,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n',
          },
        ],
        clouds: {
          all: 7,
        },
        wind: {
          speed: 1.75,
          deg: 193,
          gust: 2.04,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-16 12:00:00',
      },
      {
        dt: 1676559600,
        main: {
          temp: 5.69,
          feels_like: 5.69,
          temp_min: 5.69,
          temp_max: 5.69,
          pressure: 1028,
          sea_level: 1028,
          grnd_level: 1023,
          humidity: 43,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 65,
        },
        wind: {
          speed: 0.58,
          deg: 340,
          gust: 1.01,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-16 15:00:00',
      },
      {
        dt: 1676570400,
        main: {
          temp: 4.51,
          feels_like: 1.43,
          temp_min: 4.51,
          temp_max: 4.51,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1022,
          humidity: 41,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 72,
        },
        wind: {
          speed: 3.71,
          deg: 349,
          gust: 4.4,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-16 18:00:00',
      },
    ],
  };
  const endState = weatherReducer(
    initialState,
    requestDailyForecast.fulfilled(madridForecast.list, '', { cityName: 'Madrid' }, null),
  );
  expect(endState.dailyForecast.length).toBe(8); // because 24 hours / 3 hours = 8 , APi sends info in 3-hours chunks
  expect(endState.dailyForecast[0].dt).toEqual(1676494800);
});

test('data should be cleared', () => {
  let endState = weatherReducer(initialState, weatherActions.addNewCity('Odessa'));

  expect(endState.cities.length).toBe(4);
  expect(endState.cities[0]).toBe('Odessa');
  expect(endState.cities[3]).toBe('Berlin');

  const madridForecast = {
    list: [
      {
        dt: 1676494800,
        main: {
          temp: 0.8,
          feels_like: -2.7,
          temp_min: 0.8,
          temp_max: 1.31,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1022,
          humidity: 47,
          temp_kf: -0.51,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n',
          },
        ],
        clouds: {
          all: 6,
        },
        wind: {
          speed: 3.19,
          deg: 47,
          gust: 4.32,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-15 21:00:00',
      },
      {
        dt: 1676505600,
        main: {
          temp: 1.7,
          feels_like: -1.52,
          temp_min: 1.7,
          temp_max: 2.28,
          pressure: 1028,
          sea_level: 1028,
          grnd_level: 1024,
          humidity: 41,
          temp_kf: -0.58,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d',
          },
        ],
        clouds: {
          all: 11,
        },
        wind: {
          speed: 3.08,
          deg: 20,
          gust: 3.6,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-02-16 00:00:00',
      },
      {
        dt: 1676516400,
        main: {
          temp: 4.4,
          feels_like: 2.52,
          temp_min: 4.4,
          temp_max: 4.4,
          pressure: 1028,
          sea_level: 1028,
          grnd_level: 1023,
          humidity: 31,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 6,
        },
        wind: {
          speed: 2.15,
          deg: 23,
          gust: 1.98,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-02-16 03:00:00',
      },
      {
        dt: 1676527200,
        main: {
          temp: 6,
          feels_like: 5.22,
          temp_min: 6,
          temp_max: 6,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1022,
          humidity: 29,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 1.4,
          deg: 104,
          gust: 1.22,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-02-16 06:00:00',
      },
      {
        dt: 1676538000,
        main: {
          temp: 6.28,
          feels_like: 5.23,
          temp_min: 6.28,
          temp_max: 6.28,
          pressure: 1028,
          sea_level: 1028,
          grnd_level: 1023,
          humidity: 31,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n',
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 1.65,
          deg: 136,
          gust: 1.51,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-16 09:00:00',
      },
      {
        dt: 1676548800,
        main: {
          temp: 6.1,
          feels_like: 4.91,
          temp_min: 6.1,
          temp_max: 6.1,
          pressure: 1029,
          sea_level: 1029,
          grnd_level: 1024,
          humidity: 39,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n',
          },
        ],
        clouds: {
          all: 7,
        },
        wind: {
          speed: 1.75,
          deg: 193,
          gust: 2.04,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-16 12:00:00',
      },
      {
        dt: 1676559600,
        main: {
          temp: 5.69,
          feels_like: 5.69,
          temp_min: 5.69,
          temp_max: 5.69,
          pressure: 1028,
          sea_level: 1028,
          grnd_level: 1023,
          humidity: 43,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 65,
        },
        wind: {
          speed: 0.58,
          deg: 340,
          gust: 1.01,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-16 15:00:00',
      },
      {
        dt: 1676570400,
        main: {
          temp: 4.51,
          feels_like: 1.43,
          temp_min: 4.51,
          temp_max: 4.51,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1022,
          humidity: 41,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 72,
        },
        wind: {
          speed: 3.71,
          deg: 349,
          gust: 4.4,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-16 18:00:00',
      },
    ],
  };
  const odessaForecast = {
    coord: { lon: 30.7326, lat: 46.4775 },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    base: 'stations',
    main: {
      temp: 25.93,
      feels_like: 25.86,
      temp_min: 25.93,
      temp_max: 25.93,
      pressure: 1007,
      humidity: 49,
      sea_level: 1007,
      grnd_level: 1001,
    },
    visibility: 10000,
    wind: { speed: 3.82, deg: 164, gust: 2.53 },
    clouds: { all: 75 },
    dt: 1659351188,
    sys: { country: 'UA', sunrise: 1659321458, sunset: 1659374943 },
    timezone: 10800,
    id: 698740,
    name: 'Odesa',
    cod: 200,
  };
  const city = 'Odessa';

  endState = weatherReducer(
    initialState,
    requestCurrentForecast.fulfilled(
      {
        currentForecast: odessaForecast,
        city,
        meta: {
          name: 'Ukraine',
          flags: {
            svg: 'https://flagcdn.com/ua.svg',
            png: 'https://flagcdn.com/w320/ua.png',
          },
        },
        initRequest: true,
      },
      '',
      { city, initRequest: true },
    ),
  );
  expect(endState.currentForecast[city]).toBeDefined();
  expect(endState.currentForecast[city].forecast.id).toBe(698740);

  endState = weatherReducer(
    initialState,
    requestDailyForecast.fulfilled(madridForecast.list, '', { cityName: 'Madrid' }, null),
  );
  expect(endState.dailyForecast.length).toBe(8); // because 24 hours / 3 hours = 8 , APi sends info in 3-hours chunks
  expect(endState.dailyForecast[0].dt).toEqual(1676494800);
  endState = weatherReducer(initialState, weatherActions.clearData());

  expect(endState.cities.length).toEqual(0);
  expect(endState.dailyForecast.length).toEqual(0);
  expect(Object.keys(endState.currentForecast).length).toEqual(0);
});
