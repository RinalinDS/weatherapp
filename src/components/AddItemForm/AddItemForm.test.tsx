import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AddItemForm } from 'components/AddItemForm/AddItemForm';

const callback = jest.fn();

test('form has some button', () => {
  render(<AddItemForm callBack={callback} />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('form has some text', () => {
  render(<AddItemForm callBack={callback} />);
  expect(screen.getAllByText(/City name/i)).toBeDefined();
});

test('AddItemForm snapshot', () => {
  const component = render(<AddItemForm callBack={callback} />);

  expect(component).toMatchSnapshot();
});
