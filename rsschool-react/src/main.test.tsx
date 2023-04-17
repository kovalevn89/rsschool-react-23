import App from './App';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('main test', () => {
  it('Check main render very well', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Rick&Morty/i)).toBeInTheDocument();
  });
});
