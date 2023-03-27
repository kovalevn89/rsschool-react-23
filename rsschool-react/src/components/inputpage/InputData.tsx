import React from 'react';

class InputData extends React.Component<
  { anyref: React.RefObject<HTMLInputElement>; dataErrorRef: React.RefObject<HTMLDivElement> },
  {}
> {
  constructor(
    props: Readonly<{
      anyref: React.RefObject<HTMLInputElement>;
      dataErrorRef: React.RefObject<HTMLDivElement>;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Planned date of arrival at the warehouse: </label>
        <input type="date" name="data" id="date-input" ref={this.props.anyref} />
        <div className="error" ref={this.props.dataErrorRef}></div>
      </div>
    );
  }
}

export default InputData;
