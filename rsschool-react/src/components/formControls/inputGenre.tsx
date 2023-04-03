import { InputControl } from '../types/types';

const InputGenre = (control: InputControl) => (
  <div>
    <label className="form__label">
      <span>Genre:</span>
      <select {...control.reg('genre', { required: 'The field is required' })}>
        <option value="">Select genre</option>
        <option value="Drama">Drama</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Adventure">Adventure</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Horror">Horror</option>
        <option value="Crime">Crime</option>
      </select>
    </label>
    {control.err.genre && <p className="error">{control.err.genre.message || 'Error!!!'}</p>}
  </div>
);

export default InputGenre;
