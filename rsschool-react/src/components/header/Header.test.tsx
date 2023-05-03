import Header from './Header';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Header test', () => {
  it('Check Header render very well', () => {
    render(
      <BrowserRouter>
        <Header path="/" />
      </BrowserRouter>
    );
    expect(screen.getByText(/Rick&Morty/i)).toBeInTheDocument();
  });
});
