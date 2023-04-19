import { useForm, SubmitHandler } from 'react-hook-form';
import Card2 from '../components/card/Card2';
import InputTitle from '../components/formControls/inputTitle';
import InputDescription from '../components/formControls/inputDescription';
import InputPremiere from '../components/formControls/inputPremiere';
import InputGenre from '../components/formControls/inputGenre';
import InputTranslation from '../components/formControls/inputCover';
import InputCover from '../components/formControls/inputTranslation';
import InputAccept from '../components/formControls/inputAccept';
import { RootState } from '../components/types/types';
import { useSelector, useDispatch } from 'react-redux';
import { setCard } from '../store/searchSlice';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

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

const Inputpage = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.search.cards);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInputs>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormInputs> = (value) => {
    const tempCard = [...cards];
    tempCard.push({
      id: cards.length + 1,
      name: value.title,
      status: value.description,
      species: value.translationToRussian,
      type: '',
      gender: value.genre,
      origin: {
        name: '',
        url: '',
      },
      location: {
        name: '',
        url: '',
      },
      image: value.cover[0].name,
      episode: [''],
      url: value.cover[0].name,
      created: value.worldPremiere,
    });

    dispatch(setCard(tempCard));
    reset();
    alert('Card successfully added!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Input card info:</h2>
        <InputTitle reg={register} err={errors} />
        <InputDescription reg={register} err={errors} />
        <InputPremiere reg={register} err={errors} />
        <InputGenre reg={register} err={errors} />
        <InputTranslation reg={register} err={errors} />
        <InputCover reg={register} err={errors} />
        <InputAccept reg={register} err={errors} />
        <button type="submit">Submit</button>
      </form>
      {cards.length ? <h2>Films list:</h2> : ''}
      <div className="result__list">
        {cards.map((item) => (
          <Card2
            key={String(item.id)}
            id={item.id}
            name={item.name}
            status={item.status}
            species={item.species}
            type={item.type}
            gender={item.gender}
            origin={{ name: item.origin.name, url: item.origin.url }}
            location={{ name: item.location.name, url: item.location.url }}
            image={item.image}
            episode={item.episode}
            url={item.url}
            created={item.created}
          />
        ))}
      </div>
    </div>
  );
};

export default Inputpage;
