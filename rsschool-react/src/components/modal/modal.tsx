import ReactDOM from 'react-dom';
import { ICardRM, ICardId } from '../../components/types/types';
import CardFull from '../card/CardFull';
import { useGetCardsWithIDQuery } from '../../api/api';

const ModalCard = (cardId: ICardId) => {
  const { data = { id: -1 }, isLoading } = useGetCardsWithIDQuery(String(cardId.id));

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
            {data.id !== -1 ? (
              <CardFull
                key={String(data.id)}
                id={data.id}
                name={(data as ICardRM).name}
                status={(data as ICardRM).status}
                species={(data as ICardRM).species}
                type={(data as ICardRM).type}
                gender={(data as ICardRM).gender}
                origin={{ name: (data as ICardRM).origin.name, url: (data as ICardRM).origin.url }}
                location={{
                  name: (data as ICardRM).location.name,
                  url: (data as ICardRM).location.url,
                }}
                image={(data as ICardRM).image}
                episode={(data as ICardRM).episode}
                url={(data as ICardRM).url}
                created={(data as ICardRM).created}
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
