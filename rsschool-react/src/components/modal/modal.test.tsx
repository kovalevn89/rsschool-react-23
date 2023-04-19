import ModalCard from './modal';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('Modal window test', () => {
  it('Check if the Modal window render very well', () => {
    render(
      <Provider store={store}>
        <ModalCard id={1} />
      </Provider>
    );
    expect(screen.getByText(/Character full info:/i)).toBeInTheDocument();
  });
});
