import { ICardRM } from '../types/types';

const Card2 = (card: ICardRM) => {
  return (
    <div key={card.id} id={String(card.id)} className="card__card">
      <div className="card__info-block">
        <table className="card__info-table">
          <tbody>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Image:</td>
              <td className="card__info-table_column-value">{card.image}</td>
            </tr>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Title:</td>
              <td className="card__info-table_column-value">{card.name}</td>
            </tr>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Description:</td>
              <td className="card__info-table_column-value">{card.status}</td>
            </tr>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Date:</td>
              <td className="card__info-table_column-value">{card.created}</td>
            </tr>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Alive:</td>
              <td className="card__info-table_column-value">{card.species}</td>
            </tr>
            <tr className="card__info-table_row">
              <td className="card__info-table_column-caption">Gender:</td>
              <td className="card__info-table_column-value">{card.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card2;
