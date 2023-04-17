import HeaderPageIndicator from './HeaderPageIndicator';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('HeaderPageIndicator test', () => {
  it('Check HeaderPageIndicator render very well', () => {
    render(<HeaderPageIndicator path="/" />);
    expect(screen.getByText(/Main/i)).toBeInTheDocument();
  });
});
