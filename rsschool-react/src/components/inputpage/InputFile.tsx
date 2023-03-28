import React from 'react';

class InputFile extends React.Component<
  { fileRef: React.RefObject<HTMLInputElement>; fileErrorRef: React.RefObject<HTMLDivElement> },
  {}
> {
  constructor(
    props: Readonly<{
      fileRef: React.RefObject<HTMLInputElement>;
      fileErrorRef: React.RefObject<HTMLDivElement>;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Product Image: </label>
        <input type="file" multiple accept="image/*" id="file-input" ref={this.props.fileRef} />
        <div className="error" ref={this.props.fileErrorRef}></div>
      </div>
    );
  }
}

export default InputFile;
