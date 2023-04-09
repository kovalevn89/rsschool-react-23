import axios from 'axios';
import { AxiosError } from 'axios';
import { ICardRM } from '../components/types/types';

const BASE_URL = 'https://rickandmortyapi.com/api';
const GET_CHARACTER = '/character/';
const SEARCH_CHARACTER = '/character/?name=';

export const getAllCharacter = async (): Promise<ICardRM[] | undefined> => {
  try {
    const res = await axios.get(BASE_URL + GET_CHARACTER);

    if (res.status === 200) {
      return res.data.results;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error!.message);
    }
  }
};

export const searchCharacter = async (query: string): Promise<ICardRM[] | undefined> => {
  try {
    const res = await axios.get(BASE_URL + SEARCH_CHARACTER + query);

    if (res.status === 200) {
      return res.data.results;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error!.message);
    }
  }
};
