import React from 'react';

class InputProduct extends React.Component<{ anyref: React.RefObject<HTMLInputElement> }, {}> {
  constructor(
    props: Readonly<{
      anyref: React.RefObject<HTMLInputElement>;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Product name: </label>
        <input type="text" name="prod-name" ref={this.props.anyref} />
      </div>
    );
  }
}

export default InputProduct;
