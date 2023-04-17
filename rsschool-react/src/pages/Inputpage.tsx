import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
// import Card from '../components/card/Card';
import { FormInputs, IFilm } from '../components/types/types';
import InputTitle from '../components/formControls/inputTitle';
import InputDescription from '../components/formControls/inputDescription';
import InputPremiere from '../components/formControls/inputPremiere';
import InputGenre from '../components/formControls/inputGenre';
import InputTranslation from '../components/formControls/inputCover';
import InputCover from '../components/formControls/inputTranslation';
import InputAccept from '../components/formControls/inputAccept';

const Inputpage = () => {
  const [filmDatas, addFilm] = useState<IFilm[]>([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInputs>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormInputs> = (value) => {
    filmDatas.push({
      id: filmDatas.length + 1,
      title: value.title,
      description: value.description,
      worldPremiere: value.worldPremiere,
      genre: value.genre,
      translationToRussian: value.translationToRussian,
      cover: value.cover[0],
    });
    addFilm(filmDatas);
    reset();
    alert('Card successfully added!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Input films card info:</h2>
        <InputTitle reg={register} err={errors} />
        <InputDescription reg={register} err={errors} />
        <InputPremiere reg={register} err={errors} />
        <InputGenre reg={register} err={errors} />
        <InputTranslation reg={register} err={errors} />
        <InputCover reg={register} err={errors} />
        <InputAccept reg={register} err={errors} />
        <button type="submit">Submit</button>
      </form>
      {filmDatas.length ? <h2>Films list:</h2> : ''}
      <div className="result__list">
        {/* {filmDatas.map((item, index) => (
          <Card
            key={String(index)}
            uuid={String(index)}
            title={item.title}
            description={item.description}
            worldPremiere={item.worldPremiere}
            genre={item.genre}
            translationToRussian={item.translationToRussian}
            image={item.cover}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Inputpage;
