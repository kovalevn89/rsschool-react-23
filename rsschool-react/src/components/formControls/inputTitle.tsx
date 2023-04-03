import React from 'react';
import { InputControl } from '../types/types';

class InputTitle extends React.Component<InputControl> {
  constructor(props: Readonly<InputControl>) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Title:</label>
        <input
          {...this.props.reg('title', {
            required: 'The field is required',
            minLength: {
              value: 5,
              message: 'Minimum length 5 characters',
            },
          })}
        />
        <div className="error">
          {this.props.err?.title && (this.props.err?.title?.message || 'Error!!!')}
        </div>
      </div>
    );
  }
}

export default InputTitle;
