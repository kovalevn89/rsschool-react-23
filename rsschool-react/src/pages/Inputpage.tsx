import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
// import BrandSelect from '../components/inputpage/BrandSelect';
// import InputProduct from '../components/inputpage/InputProduct';
// import InputData from '../components/inputpage/InputData';
// import InputSex from '../components/inputpage/InputSex';
// import InputFile from '../components/inputpage/InputFile';
// import InputAccept from '../components/inputpage/InputAccept';
// import Card2 from '../components/card/Card2';
// import Card3 from '../components/card/Card3';

interface FormInputs {
  title: string;
  description: string;
  genre: string;
  worldPremiere: string;
  translationToRussian: string;
}

const Inputpage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormInputs> = (value) => {
    console.log(JSON.stringify(value));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Input product card info:</h2>
        {/* TITLE */}
        <div>
          <label>Title:</label>
          <input
            {...register('title', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 5,
                message: 'Минимальная длинная 5 символов',
              },
            })}
          />
          <div className="error">{errors?.title && (errors?.title?.message || 'Error!!!')}</div>
        </div>
        {/* description */}
        <div>
          <label>Description:</label>
          <input
            {...register('description', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 10,
                message: 'Минимальная длинная 10 символов',
              },
            })}
          />
          <div className="error">
            {errors?.description && (errors?.description?.message || 'Error!!!')}
          </div>
        </div>
        {/* "worldPremiere": "10.09.1994", */}
        <div>
          <label>World Premiere:</label>
          <input
            type="date"
            {...register('worldPremiere', {
              required: 'Поле обязательно для заполнения',
            })}
          />
          <div className="error">
            {errors?.worldPremiere && (errors?.worldPremiere?.message || 'Error!!!')}
          </div>
        </div>
        {/* genre */}
        <div>
          <label>Genre:</label>
          <select {...register('genre', { required: 'Поле обязательно для заполнения' })}>
            <option value="">Select genre</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Adventure">Adventure</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Crime">Crime</option>
          </select>
          <div className="error">{errors?.genre && (errors?.genre?.message || 'Error!!!')}</div>
        </div>
        {/* "translationToRussian": "yes", */}
        <div>
          <label>Translation to Russian:</label>
          <input
            type="radio"
            value="dor1"
            {...register('translationToRussian', { validate: { ch: (value) => value } })}
          />
          <label>yes</label>
          <input type="radio" value="dor2" {...register('translationToRussian')} />
          <label>no</label>
          <div className="error">
            {errors?.translationToRussian && (errors?.translationToRussian?.message || 'Error!!!')}
          </div>
        </div>
        {/* "cover": "./covers/The_Shawshank_Redemption.webp" */}
        {/* appruve */}
        <button type="submit">Submit</button>
      </form>
      <h2>Cards list:</h2>
    </div>
  );
};

export default Inputpage;
