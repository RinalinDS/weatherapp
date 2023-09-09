import { CityCurrentWeatherCard } from './CurrentCityWeatherCard';
import { ForecastMetaType } from '../../types/StateTypes';
import { render, screen } from 'test-utils/testing-library-utils';

describe('CurrentCityWeatherCard render', () => {
  const callback = jest.fn();
  const forecastForCity = {} as ForecastMetaType;

  it('CurrentCityWeatherCard should render', () => {
    render(
      <CityCurrentWeatherCard
        city={'London'}
        forecastForCity={forecastForCity}
        callback={callback}
      />,
    );

    const element = screen.getByTestId('navlink');
    const button = screen.getByText('Update');
    expect(button).toBeInTheDocument();
    expect(element).toBeInTheDocument();
  });
});
