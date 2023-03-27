import React from 'react';

class InputAccept extends React.Component<
  { acceptRef: React.RefObject<HTMLInputElement>; acceptErrorRef: React.RefObject<HTMLDivElement> },
  {}
> {
  constructor(
    props: Readonly<{
      acceptRef: React.RefObject<HTMLInputElement>;
      acceptErrorRef: React.RefObject<HTMLDivElement>;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Accept info upload </label>
        <input type="checkbox" id="accept-input" ref={this.props.acceptRef} />
        <div className="error" ref={this.props.acceptErrorRef}></div>
      </div>
    );
  }
}

export default InputAccept;
