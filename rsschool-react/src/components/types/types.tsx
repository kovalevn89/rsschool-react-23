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
