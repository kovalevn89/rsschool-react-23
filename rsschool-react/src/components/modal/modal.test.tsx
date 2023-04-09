import ModalCard from './modal';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Modal window test', () => {
  it('Check if the Modal window render very well', () => {
    render(<ModalCard id={1} />);
    expect(screen.getByText(/Character full info:/i)).toBeInTheDocument();
  });
});
