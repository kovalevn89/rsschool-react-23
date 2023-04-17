import Mainpage from './Mainpage';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Mainpage test', () => {
  it('Check if the Mainpage render .main__products block', async () => {
    render(<Mainpage />);
    expect(screen.getByTestId('mainpage-id')).toBeDefined();
  });
});
