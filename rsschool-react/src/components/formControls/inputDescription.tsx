import React from 'react';
import { InputControl } from '../types/types';

class InputDescription extends React.Component<InputControl> {
  constructor(props: Readonly<InputControl>) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Description:</label>
        <input
          {...this.props.reg('description', {
            required: 'The field is required',
            minLength: {
              value: 10,
              message: 'Minimum length 10 characters',
            },
          })}
        />
        <div className="error">
          {this.props.err?.description && (this.props.err?.description?.message || 'Error!!!')}
        </div>
      </div>
    );
  }
}

export default InputDescription;
