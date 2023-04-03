import { ICard } from '../types/types';
import { useState, useEffect } from 'react';

const Card = (card: ICard) => {
  const [imageSrc, changeText] = useState('');

  useEffect(() => {
    if (typeof card.image !== 'string') {
      if (imageSrc === '') {
        const fr = new FileReader();
        fr.onload = () => {
          if (typeof fr.result === 'string') {
            changeText(fr.result);
          }
        };
        fr.readAsDataURL(card.image!);
      }
    }
  }, [imageSrc, card.image]);

  return (
    <div key={card.uuid} className="film__card">
      <img
        className="film__cover"
        src={typeof card.image === 'string' ? card.image : imageSrc}
        width="150"
      ></img>
      <div className="film__info-block">
        <table className="film__info-table">
          <tbody>
            <tr className="film__info-table_row">
              <td className="film__info-table_column-caption">Title:</td>
              <td className="film__info-table_column-value">{card.title}</td>
            </tr>
            <tr className="film__info-table_row">
              <td className="film__info-table_column-caption">Description:</td>
              <td className="film__info-table_column-value">{card.description}</td>
            </tr>
            <tr className="film__info-table_row">
              <td className="film__info-table_column-caption">World premiere:</td>
              <td className="film__info-table_column-value">{card.worldPremiere}</td>
            </tr>
            <tr className="film__info-table_row">
              <td className="film__info-table_column-caption">Genre:</td>
              <td className="film__info-table_column-value">{card.genre}</td>
            </tr>
            <tr className="film__info-table_row">
              <td className="film__info-table_column-caption">Translation to russian:</td>
              <td className="film__info-table_column-value">{card.translationToRussian}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
