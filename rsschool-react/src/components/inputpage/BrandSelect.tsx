import React from 'react';

class BrandSelect extends React.Component<
  { brandref: React.RefObject<HTMLSelectElement>; brandErrorRef: React.RefObject<HTMLDivElement> },
  {}
> {
  constructor(
    props: Readonly<{
      brandref: React.RefObject<HTMLSelectElement>;
      brandErrorRef: React.RefObject<HTMLDivElement>;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor="pet-select">Choose a BRAND:</label>
        <select name="pets" id="pet-select" ref={this.props.brandref}>
          <option value="choose">--Please choose an brand--</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="puma">Puma</option>
        </select>
        <div className="error" ref={this.props.brandErrorRef}></div>
      </div>
    );
  }
}

export default BrandSelect;
