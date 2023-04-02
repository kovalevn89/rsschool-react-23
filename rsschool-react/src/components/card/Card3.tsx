import React from 'react';

class Card3 extends React.Component<
  {
    uuid: string;
    title: string;
    description: string;
    worldPremiere: string;
    genre: string;
    translationToRussian: string;
    image: File | string;
  },
  {}
> {
  state: { imageSrc: string };

  constructor(
    props: Readonly<{
      uuid: string;
      title: string;
      description: string;
      worldPremiere: string;
      genre: string;
      translationToRussian: string;
      image: File | string;
    }>
  ) {
    super(props);
    this.state = { imageSrc: '' };
  }

  render() {
    if (typeof this.props.image !== 'string') {
      if (this.state.imageSrc === '') {
        const fr = new FileReader();
        fr.onload = () => {
          this.setState({ imageSrc: fr.result });
        };
        fr.readAsDataURL(this.props.image!);
      }
    }

    return (
      <div key={this.props.uuid} className="film__card">
        <img
          className="film__cover"
          src={typeof this.props.image === 'string' ? this.props.image : this.state.imageSrc}
          width="150"
        ></img>
        <div className="film__info-block">
          <table className="film__info-table">
            <tr className="film__info-table_row">
              <td className="film__info-table_column-caption">Title:</td>
              <td className="film__info-table_column-value">{this.props.title}</td>
            </tr>
            <tr className="film__info-table_row">
              <td className="film__info-table_column-caption">Description:</td>
              <td className="film__info-table_column-value">{this.props.description}</td>
            </tr>
            <tr className="film__info-table_row">
              <td className="film__info-table_column-caption">World premiere:</td>
              <td className="film__info-table_column-value">{this.props.worldPremiere}</td>
            </tr>
            <tr className="film__info-table_row">
              <td className="film__info-table_column-caption">Genre:</td>
              <td className="film__info-table_column-value">{this.props.genre}</td>
            </tr>
            <tr className="film__info-table_row">
              <td className="film__info-table_column-caption">Translation to russian:</td>
              <td className="film__info-table_column-value">{this.props.translationToRussian}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Card3;
