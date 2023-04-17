import App from './App';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('App test', () => {
  it('Check App render very well', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Rick&Morty/i)).toBeInTheDocument();
  });
});
