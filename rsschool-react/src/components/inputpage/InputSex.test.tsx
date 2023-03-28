import React from 'react';
import InputSex from './InputSex';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Input product sex test', () => {
  it('Check if the Product sex component render very well', () => {
    render(<InputSex maleRef={React.createRef()} femaleRef={React.createRef()} />);
    expect(screen.getByText(/Choose gender:/i)).toBeInTheDocument();
  });
});
