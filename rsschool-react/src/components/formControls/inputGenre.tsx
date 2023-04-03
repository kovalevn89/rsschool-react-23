import React from 'react';
import { InputControl } from '../types/types';

class InputGenre extends React.Component<InputControl> {
  constructor(props: Readonly<InputControl>) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Genre:</label>
        <select {...this.props.reg('genre', { required: 'The field is required' })}>
          <option value="">Select genre</option>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Adventure">Adventure</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Crime">Crime</option>
        </select>
        <div className="error">
          {this.props.err?.genre && (this.props.err?.genre?.message || 'Error!!!')}
        </div>
      </div>
    );
  }
}

export default InputGenre;
