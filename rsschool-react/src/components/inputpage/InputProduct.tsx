import React from 'react';

class InputProduct extends React.Component<
  { anyref: React.RefObject<HTMLInputElement>; nameErrorRef: React.RefObject<HTMLDivElement> },
  {}
> {
  constructor(
    props: Readonly<{
      anyref: React.RefObject<HTMLInputElement>;
      nameErrorRef: React.RefObject<HTMLDivElement>;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Product name: </label>
        <input type="text" name="prod-name" ref={this.props.anyref} />
        <div className="error" ref={this.props.nameErrorRef}></div>
      </div>
    );
  }
}

export default InputProduct;
