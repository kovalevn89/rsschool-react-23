import ReactDOM from 'react-dom';
import { getCharacterWithID } from '../../api/api';
import { useEffect, useState } from 'react';
import { ICardRM, ICardId } from '../../components/types/types';
import CardFull from '../card/CardFull';

const ModalCard = (cardId: ICardId) => {
  const [card, changeCard] = useState(Array<ICardRM>);
  const [isLoading, changeLoading] = useState(false);

  useEffect(() => {
    const getCharacter = async () => {
      changeLoading(true);
      const result = await getCharacterWithID(cardId.id);
      changeLoading(false);

      result !== undefined ? changeCard(Array.of(result)) : changeCard([]);
    };

    getCharacter();
  }, [cardId.id]);

  const onClickClose = () => {
    cardId.callback();
  };

  return ReactDOM.createPortal(
    <div id="openModal" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Character full info:</h3>
            <div title="Close" className="close" onClick={onClickClose}>
              x
            </div>
          </div>
          <div className="modal-body">
            {isLoading && (
              <div className="lds-ring">
                <div /> <div /> <div /> <div />
              </div>
            )}
            {card.length > 0 ? (
              <CardFull
                key={String(card[0].id)}
                id={card[0].id}
                name={card[0].name}
                status={card[0].status}
                species={card[0].species}
                type={card[0].type}
                gender={card[0].gender}
                origin={{ name: card[0].origin.name, url: card[0].origin.url }}
                location={{ name: card[0].location.name, url: card[0].location.url }}
                image={card[0].image}
                episode={card[0].episode}
                url={card[0].url}
                created={card[0].created}
              />
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalCard;
