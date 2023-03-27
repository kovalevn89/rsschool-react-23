import React from 'react';

class InputAccept extends React.Component<{ acceptRef: React.RefObject<HTMLInputElement> }, {}> {
  constructor(
    props: Readonly<{
      acceptRef: React.RefObject<HTMLInputElement>;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Accept info upload </label>
        <input type="checkbox" id="accept-input" ref={this.props.acceptRef} />
      </div>
    );
  }
}

export default InputAccept;
