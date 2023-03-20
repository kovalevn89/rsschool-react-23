import React from 'react';

class Card extends React.Component<
  { mkey: string; thumbnail: string; manufacturer: string; title: string; price: string },
  {}
> {
  constructor(
    props: Readonly<{
      mkey: string;
      thumbnail: string;
      manufacturer: string;
      title: string;
      price: string;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div key={this.props.mkey} className="product__item">
        <div className="item__image" style={{ backgroundImage: this.props.thumbnail }}></div>
        <div className="item__info-block">
          <div className="info__caption">
            <span className="caption__brand">{this.props.manufacturer}</span>
            <span> - </span>
            <span className="caption__title">{this.props.title}</span>
          </div>
          <div className="info__block">
            <div className="info__block-left"></div>
            <div className="info__price">
              <span className="price__currency">$</span>
              <span className="price__value">{this.props.price}</span>
            </div>
          </div>
          <div className="info__block-right"></div>
        </div>
      </div>
    );
  }
}

export default Card;
