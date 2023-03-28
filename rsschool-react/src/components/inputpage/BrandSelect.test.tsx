import React from 'react';
import BrandSelect from './BrandSelect';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Brand select test', () => {
  it('Check if the Brand select text render very well', () => {
    render(<BrandSelect brandref={React.createRef()} />);
    expect(screen.getByText(/Choose a BRAND:/i)).toBeInTheDocument();
  });
});
