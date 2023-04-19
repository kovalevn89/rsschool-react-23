export type HeaderPath = {
  path: string;
};

interface ICardOrigin {
  name: string;
  url: string;
}

interface ICardLocation {
  name: string;
  url: string;
}

export interface ICardRM {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ICardOrigin;
  location: ICardLocation;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export interface ICardId {
  id: number;
  callback: () => void;
}

export interface ICardsAnwer {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: ICardRM[];
}

export interface RootState {
  search: {
    queryString: string;
    isLoading: false;
    cards: ICardRM[];
  };
}
