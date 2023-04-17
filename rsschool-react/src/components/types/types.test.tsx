import { ICardRM, HeaderPath } from './types';
import { it, describe } from 'vitest';
import { expectTypeOf } from 'vitest';

describe('Type ICardRM test', () => {
  it('Check type ICardRM', () => {
    const test: ICardRM = {
      id: 1,
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      origin: {
        name: '',
        url: '',
      },
      location: {
        name: '',
        url: '',
      },
      image: '',
      episode: [],
      url: '',
      created: '',
    };
    expectTypeOf(test).toHaveProperty('id').toBeNumber();
  });
});

describe('Type HeaderPath test', () => {
  it('Check type HeaderPath', () => {
    const test: HeaderPath = {
      path: '',
    };
    expectTypeOf(test).toHaveProperty('path').toBeString();
  });
});
