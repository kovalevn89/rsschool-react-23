import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState } from 'react';
import Card3 from '../components/card/Card';

interface FormInputs {
  title: string;
  description: string;
  genre: string;
  worldPremiere: string;
  translationToRussian: string;
  accept: boolean;
  cover: FileList;
}

interface IFilm {
  id: number;
  title: string;
  description: string;
  worldPremiere: string;
  genre: string;
  translationToRussian: string;
  cover: File | string;
}

const Inputpage = () => {
  const [filmDatas, addFilm] = useState<IFilm[]>([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormInputs> = (value) => {
    console.log(JSON.stringify(value));
    console.log(value.cover[0]);
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
              required: 'The field is required',
              minLength: {
                value: 5,
                message: 'Minimum length 5 characters',
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
              required: 'The field is required',
              minLength: {
                value: 10,
                message: 'Minimum length 10 characters',
              },
            })}
          />
          <div className="error">
            {errors?.description && (errors?.description?.message || 'Error!!!')}
          </div>
        </div>
        {/* worldPremiere */}
        <div>
          <label>World Premiere:</label>
          <input
            type="date"
            {...register('worldPremiere', {
              required: 'The field is required',
            })}
          />
          <div className="error">
            {errors?.worldPremiere && (errors?.worldPremiere?.message || 'Error!!!')}
          </div>
        </div>
        {/* genre */}
        <div>
          <label>Genre:</label>
          <select {...register('genre', { required: 'The field is required' })}>
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
        {/* translationToRussian */}
        <div>
          <label>Translation to Russian:</label>
          <input
            type="radio"
            value="yes"
            {...register('translationToRussian', { required: 'Please choose radio' })}
          />
          <label>yes</label>
          <input
            type="radio"
            value="no"
            {...register('translationToRussian', { required: 'Please choose radio' })}
          />
          <label>no</label>
          <div className="error">
            {errors?.translationToRussian && (errors?.translationToRussian?.message || 'Error!!!')}
          </div>
        </div>
        {/* cover */}
        <div>
          <label>Film cover:</label>
          <input
            type="file"
            accept="image/*"
            {...register('cover', { required: 'Please cover image' })}
          />
          <div className="error">{errors?.cover && (errors?.cover?.message || 'Error!!!')}</div>
        </div>
        {/* accept */}
        <div>
          <label>Accept card upload </label>
          <input
            type="checkbox"
            {...register('accept', { required: 'Input needs to be confirmed' })}
          />
          <div className="error">{errors?.accept && (errors?.accept?.message || 'Error!!!')}</div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Cards list:</h2>
      <div className="films__list">
        {filmDatas.map((item, index) => (
          <Card3
            key={String(index)}
            uuid={String(index)}
            title={item.title}
            description={item.description}
            worldPremiere={item.worldPremiere}
            genre={item.genre}
            translationToRussian={item.translationToRussian}
            image={item.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Inputpage;
