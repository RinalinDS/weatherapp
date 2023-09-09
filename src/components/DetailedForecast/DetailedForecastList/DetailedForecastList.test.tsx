import { render, screen } from 'test-utils/testing-library-utils';
import { HourlyForecastList } from 'types/DailyForecastType';
import { DetailedForecastList } from './DetailedForecastList';

const element: HourlyForecastList = {
  clouds: {
    all: 1,
  },
  dt: 1694304000,
  dt_txt: '2023-09-10 00:00:00',
  main: {
    feels_like: 10.96,
    grnd_level: 1021,
    humidity: 80,
    pressure: 1023,
    sea_level: 1023,
    temp: 11.65,
    temp_kf: 0,
    temp_max: 11.65,
    temp_min: 11.65,
  },
  pop: 0,
  sys: {
    pod: 'n',
  },
  visibility: 10000,
  weather: [
    {
      description: 'clear sky',
      icon: '01n',
      id: 800,
      main: 'Clear',
    },
  ],
  wind: {
    deg: 188,
    gust: 4.7,
    speed: 2.53,
  },
};

describe('DetailedForecastList', () => {
  it('renders forecast data from hook', () => {
    render(<DetailedForecastList element={element} />);

    expect(screen.getByText(/2023-09-10/)).toBeInTheDocument();
    expect(screen.getByAltText('weather icon')).toBeInTheDocument();
  });
});
