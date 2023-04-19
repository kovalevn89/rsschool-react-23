import Card2 from './Card2';
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

describe('Card test', () => {
  it('Check if the Card render very well', () => {
    render(
      <Card2
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
    expect(screen.getByText(/Image:/i)).toBeInTheDocument();
    expect(screen.getByText(/Title:/i)).toBeInTheDocument();
    expect(screen.getByText(/Description:/i)).toBeInTheDocument();
    expect(screen.getByText(/Date:/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive:/i)).toBeInTheDocument();
  });
});
