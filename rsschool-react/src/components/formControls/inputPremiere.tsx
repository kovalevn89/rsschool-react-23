import React from 'react';
import { InputControl } from '../types/types';

class InputPremiere extends React.Component<InputControl> {
  constructor(props: Readonly<InputControl>) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>World Premiere:</label>
        <input
          type="date"
          {...this.props.reg('worldPremiere', {
            required: 'The field is required',
          })}
        />
        <div className="error">
          {this.props.err?.worldPremiere && (this.props.err?.worldPremiere?.message || 'Error!!!')}
        </div>
      </div>
    );
  }
}

export default InputPremiere;
