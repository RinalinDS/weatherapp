import { render, screen } from '@testing-library/react';
import { CardHeader } from './CardHeader';
import userEvent from '@testing-library/user-event';

describe('CardHeader render conditions', () => {
  const setModalActive = jest.fn();

  it('CardHeader should be rendered with proper city name', () => {
    render(<CardHeader city={'London'} setModalActive={setModalActive} />);
    const cityName = screen.getByRole('heading', { name: 'London' });
    expect(cityName).toBeInTheDocument();
  });

  it('CardHeader should call callbackHandler when the button is clicked', async () => {
    render(<CardHeader city={'London'} setModalActive={setModalActive} />);

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(setModalActive).toHaveBeenCalledWith(true);
  });
});
