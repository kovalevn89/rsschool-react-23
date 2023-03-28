import React from 'react';
import InputData from './InputData';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Input data test', () => {
  it('Check if the Input Data component render very well', () => {
    render(<InputData anyref={React.createRef()} />);
    expect(screen.getByText(/Planned date of arrival at the warehouse:/i)).toBeInTheDocument();
  });
});
