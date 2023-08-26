import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ReactElement } from 'react';
import { HashRouter } from 'react-router-dom';

const AllTheProviders = ({ children }: { children: ReactElement }) => {
  return (
    <HashRouter>
      <Provider store={store}>{children}</Provider>
    </HashRouter>
  );
};

const customRender = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
