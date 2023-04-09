import { ICardRM } from '../types/types';
import { useState, useEffect } from 'react';

const Card = (card: ICardRM) => {
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

  const clickCard = (id: number) => {
    console.log('click to card #' + id);
  };

  return (
    <div
      key={card.id}
      id={String(card.id)}
      className="card__card"
      onClick={() => clickCard(card.id)}
    >
      <img
        className="card__cover"
        src={typeof card.image === 'string' ? card.image : imageSrc}
        width="150"
      ></img>
      <div className="card__info-block">
        <table className="card__info-table">
          <tbody>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Name:</td>
              <td className="card__info-table_column-value">{card.name}</td>
            </tr>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Status:</td>
              <td className="card__info-table_column-value">{card.status}</td>
            </tr>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Species:</td>
              <td className="card__info-table_column-value">{card.species}</td>
            </tr>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Type:</td>
              <td className="card__info-table_column-value">{card.type || '-'}</td>
            </tr>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Gender:</td>
              <td className="card__info-table_column-value">{card.gender}</td>
            </tr>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Origin:</td>
              <td className="card__info-table_column-value">{card.origin.name}</td>
            </tr>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Location:</td>
              <td className="card__info-table_column-value">{card.location.name}</td>
            </tr>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Created:</td>
              <td className="card__info-table_column-value">{card.created}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;

// episode: Array<string>;
// url: string;
// created: string;
