import HeaderLogo from './HeaderLogo';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('HeaderLogo test', () => {
  it('Check HeaderLogo render very well', () => {
    render(<HeaderLogo />);
    expect(screen.getByText(/MovieBox/i)).toBeInTheDocument();
  });
});
