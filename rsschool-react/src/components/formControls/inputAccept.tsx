import React from 'react';
import { InputControl } from '../types/types';

class InputAccept extends React.Component<InputControl> {
  constructor(props: Readonly<InputControl>) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Accept card upload </label>
        <input
          type="checkbox"
          {...this.props.reg('accept', { required: 'Input needs to be confirmed' })}
        />
        <div className="error">
          {this.props.err?.accept && (this.props.err?.accept?.message || 'Error!!!')}
        </div>
      </div>
    );
  }
}

export default InputAccept;
