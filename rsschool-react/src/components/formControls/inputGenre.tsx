import { InputControl } from '../types/types';

const InputGenre = (control: InputControl) => (
  <div>
    <label>Genre:</label>
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
    <div className="error">{control.err?.genre && (control.err?.genre?.message || 'Error!!!')}</div>
  </div>
);

export default InputGenre;
