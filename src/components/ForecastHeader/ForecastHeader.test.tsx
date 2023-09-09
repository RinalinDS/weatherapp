import { render, screen } from 'test-utils/testing-library-utils';
import { MetaStateType } from 'types/StateTypes';
import { DetailedForecastHeader } from './ForecastHeader';

describe('DetailedForecastHeader render', () => {
  const meta = {} as MetaStateType;

  it('CurrentCityWeatherCard should render', () => {
    render(<DetailedForecastHeader city={'London'} meta={meta} />);

    const img = screen.getByAltText(/Country flag/);
    expect(img).toBeInTheDocument();
  });
});
