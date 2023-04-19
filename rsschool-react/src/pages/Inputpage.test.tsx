import React from 'react';
import Inputpage from './Inputpage';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';

describe('Input page test', () => {
  it('Check if the Pinput page render very well', () => {
    render(
      <Provider store={store}>
        <Inputpage />
      </Provider>
    );
    expect(screen.getByText(/Input card info:/i)).toBeInTheDocument();
  });
});
