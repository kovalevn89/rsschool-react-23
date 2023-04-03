import React from 'react';
import { InputControl } from '../types/types';

class InputCover extends React.Component<InputControl> {
  constructor(props: Readonly<InputControl>) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Translation to Russian:</label>
        <input
          type="radio"
          value="yes"
          {...this.props.reg('translationToRussian', { required: 'Please choose radio' })}
        />
        <label>yes</label>
        <input
          type="radio"
          value="no"
          {...this.props.reg('translationToRussian', { required: 'Please choose radio' })}
        />
        <label>no</label>
        <div className="error">
          {this.props.err?.translationToRussian &&
            (this.props.err?.translationToRussian?.message || 'Error!!!')}
        </div>
      </div>
    );
  }
}

export default InputCover;
