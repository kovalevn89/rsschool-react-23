import React from 'react';
import Inputpage from './Inputpage';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Input page test', () => {
  it('Check if the Pinput page render very well', () => {
    render(<Inputpage />);
    expect(screen.getByText(/Input films card info:/i)).toBeInTheDocument();
  });
});
