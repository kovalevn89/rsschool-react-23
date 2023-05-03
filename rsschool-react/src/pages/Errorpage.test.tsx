import Errorpage from './Errorpage';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Errorpage test', () => {
  it('Check if the Errorpage render very well', () => {
    render(<Errorpage />);
    expect(screen.getByText(/Page not found!/i)).toBeInTheDocument();
  });
});
