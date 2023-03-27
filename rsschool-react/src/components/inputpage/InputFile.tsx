import React from 'react';

class InputFile extends React.Component<{ fileRef: React.RefObject<HTMLInputElement> }, {}> {
  constructor(
    props: Readonly<{
      fileRef: React.RefObject<HTMLInputElement>;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Product Image: </label>
        <input type="file" multiple accept="image/*" id="file-input" ref={this.props.fileRef} />
      </div>
    );
  }
}

export default InputFile;
