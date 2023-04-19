import CardFull from './CardFull';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

const usersMock = {
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
};

describe('CardFull test', () => {
  it('Check if the CardFull render very well', () => {
    render(
      <CardFull
        key={String(usersMock.id)}
        id={usersMock.id}
        name={usersMock.name}
        status={usersMock.status}
        species={usersMock.species}
        type={usersMock.type}
        gender={usersMock.gender}
        origin={{ name: usersMock.origin.name, url: usersMock.origin.url }}
        location={{ name: usersMock.location.name, url: usersMock.location.url }}
        image={usersMock.image}
        episode={usersMock.episode}
        url={usersMock.url}
        created={usersMock.created}
      />
    );
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Status:/i)).toBeInTheDocument();
    expect(screen.getByText(/Species:/i)).toBeInTheDocument();
    expect(screen.getByText(/Type:/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender:/i)).toBeInTheDocument();
  });
});
