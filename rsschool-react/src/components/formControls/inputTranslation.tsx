import React from 'react';
import { InputControl } from '../types/types';

class InputCover extends React.Component<InputControl> {
  constructor(props: Readonly<InputControl>) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Film cover:</label>
        <input
          type="file"
          accept="image/*"
          {...this.props.reg('cover', { required: 'Please cover image' })}
        />
        <div className="error">
          {this.props.err?.cover && (this.props.err?.cover?.message || 'Error!!!')}
        </div>
      </div>
    );
  }
}

export default InputCover;
