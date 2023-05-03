import Aboutpage from './Aboutpage';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Aboutpage test', () => {
  it('Check if the Aboutpage render very well', () => {
    render(<Aboutpage />);
    expect(screen.getByText(/This is ABOUT page!/i)).toBeInTheDocument();
  });
});
