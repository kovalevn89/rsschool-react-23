import React from 'react';

class Card2 extends React.Component<
  { mkey: string; brand: string; name: string; date: string; gender: string; image: File | null },
  {}
> {
  state: { imageSrc: string };

  constructor(
    props: Readonly<{
      mkey: string;
      brand: string;
      name: string;
      date: string;
      gender: string;
      image: File | null;
    }>
  ) {
    super(props);
    this.state = { imageSrc: '' };
  }

  render() {
    if (this.state.imageSrc === '') {
      const fr = new FileReader();
      fr.onload = () => {
        this.setState({ imageSrc: fr.result });
      };
      fr.readAsDataURL(this.props.image!);
    }

    return (
      <div key={this.props.mkey} className="product__item">
        <img className="item__image_v2" src={this.state.imageSrc} width="100" height="100"></img>
        <div className="item__info-block">
          <div className="info__caption">
            <b>
              <span className="caption__brand">{this.props.brand}</span>
              <span> - </span>
              <span className="caption__title">{this.props.name}</span>
            </b>
          </div>
          <div>
            <div>
              <span>Date: </span>
              <span>{this.props.date}</span>
            </div>
            <div>
              <span>Gender: </span>
              <span>{this.props.gender}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card2;
