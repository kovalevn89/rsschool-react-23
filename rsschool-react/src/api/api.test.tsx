import { beforeEach, describe, expect, test, vi } from 'vitest';
import { getCharacterWithID, searchCharacter, getAllCharacter } from './api';
import axios from 'axios';

vi.mock('axios');

const usersMock = {
  status: 200,
  data: {
    id: 33,
    name: 'Beebo',
    status: 'Dead',
    species: 'Alien',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Venzenulon 7',
      url: 'https://rickandmortyapi.com/api/location/10',
    },
    location: {
      name: 'Venzenulon 7',
      url: 'https://rickandmortyapi.com/api/location/10',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/33.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/29'],
    url: 'https://rickandmortyapi.com/api/character/33',
    created: '2017-11-05T09:21:55.595Z',
  },
};

const userMock2 = {
  status: 200,
  data: {
    results: {
      id: 33,
      name: 'Beebo',
      status: 'Dead',
      species: 'Alien',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Venzenulon 7',
        url: 'https://rickandmortyapi.com/api/location/10',
      },
      location: {
        name: 'Venzenulon 7',
        url: 'https://rickandmortyapi.com/api/location/10',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/33.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/29'],
      url: 'https://rickandmortyapi.com/api/character/33',
      created: '2017-11-05T09:21:55.595Z',
    },
  },
};

describe('test getCharacterWithID', () => {
  beforeEach(() => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockReset();
  });

  describe('getCharacterWithID', () => {
    test('makes a GET request to getCharacterWithID', async () => {
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(usersMock);
      const character = await getCharacterWithID(33);
      expect(axios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/33');
      expect(character).toStrictEqual(usersMock.data);
    });
  });
});

describe('test searchCharacter', () => {
  beforeEach(() => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockReset();
  });

  describe('searchCharacter', () => {
    test('makes a GET request to searchCharacter', async () => {
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(userMock2);
      const character = await searchCharacter('12');
      expect(axios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/?name=12');
      expect(character).toStrictEqual(userMock2.data.results);
    });
  });
});

describe('test getAllCharacter', () => {
  beforeEach(() => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockReset();
  });

  describe('getAllCharacter', () => {
    test('makes a GET request to getAllCharacter', async () => {
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(userMock2);
      const character = await getAllCharacter();
      expect(axios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/');
      expect(character).toStrictEqual(userMock2.data.results);
    });
  });
});
