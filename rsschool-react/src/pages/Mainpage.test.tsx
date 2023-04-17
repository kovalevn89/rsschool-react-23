import Mainpage from './Mainpage';
import { Provider } from 'react-redux';
import store from '../store/store';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Mainpage test', () => {
  it('Check if the Mainpage render .main__products block', async () => {
    render(
      <Provider store={store}>
        <Mainpage />
      </Provider>
    );
    expect(screen.getByTestId('mainpage-id')).toBeDefined();
  });
});
