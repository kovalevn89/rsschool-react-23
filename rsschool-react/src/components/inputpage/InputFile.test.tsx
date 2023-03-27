import React from 'react';
import InputFile from './InputFile';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Input File test', () => {
  it('Check if the Input File component render very well', () => {
    render(<InputFile fileRef={React.createRef()} />);
    expect(screen.getByText(/Product Image:/i)).toBeInTheDocument();
  });
});
