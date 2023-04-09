import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type HeaderPath = {
  path: string;
};

export type InputControl = {
  reg: UseFormRegister<FormInputs>;
  err: FieldErrors<FormInputs>;
};

export interface FormInputs {
  title: string;
  description: string;
  genre: string;
  worldPremiere: string;
  translationToRussian: string;
  accept: boolean;
  cover: FileList;
}

export interface IFilm {
  id: number;
  title: string;
  description: string;
  worldPremiere: string;
  genre: string;
  translationToRussian: string;
  cover: File | string;
}

// export interface ICard {
//   uuid: string;
//   title: string;
//   description: string;
//   worldPremiere: string;
//   genre: string;
//   translationToRussian: string;
//   image: File | string;
// }

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
