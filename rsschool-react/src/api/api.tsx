import axios from 'axios';
import { AxiosError } from 'axios';
import { ICardRM } from '../components/types/types';

const BASE_URL = 'https://rickandmortyapi.com/api';

const GET_CHARACTER = '/character/';
//'/character/?page=2'
//'/character/?name=roc'

export const getAllCharacter = async (): Promise<ICardRM[] | undefined> => {
  try {
    const res = await axios.get(BASE_URL + GET_CHARACTER);

    if (res.status === 200) {
      console.log(res.data);

      return res.data.results;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error!.message);
    }
  }
};
