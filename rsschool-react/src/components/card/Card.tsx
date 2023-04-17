import { ICardRM } from '../types/types';
import { useState, useEffect } from 'react';
import ModalCard from '../modal/modal';

const Card = (card: ICardRM) => {
  const [imageSrc, changeText] = useState('');
  const [isModal, changeModalVisibility] = useState(false);

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

  const clickCard = () => {
    if (isModal === false) {
      changeModalVisibility(true);
    }
  };

  const hiddenCard = () => {
    changeModalVisibility(false);
  };

  return (
    <div key={card.id} id={String(card.id)} className="card__card" onClick={() => clickCard()}>
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
          </tbody>
        </table>
        {isModal && <ModalCard id={card.id} callback={hiddenCard} />}
      </div>
    </div>
  );
};

export default Card;
