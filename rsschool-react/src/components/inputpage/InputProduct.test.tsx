import React from 'react';
import InputProduct from './InputProduct';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Input product name test', () => {
  it('Check if the Product name component render very well', () => {
    render(<InputProduct anyref={React.createRef()} />);
    expect(screen.getByText(/Product name:/i)).toBeInTheDocument();
  });
});
