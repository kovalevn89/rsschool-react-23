import React from 'react';
import InputAccept from './InputAccept';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Input accept test', () => {
  it('Check if the Input accept component render very well', () => {
    render(<InputAccept acceptRef={React.createRef()} />);
    expect(screen.getByText(/Accept info upload/i)).toBeInTheDocument();
  });
});
