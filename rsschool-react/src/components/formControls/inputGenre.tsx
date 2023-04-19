import { InputControl } from '../types/types';

const InputGenre = (control: InputControl) => (
  <div>
    <label className="form__label">
      <span>Gender:</span>
      <select {...control.reg('genre', { required: 'The field is required' })}>
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </label>
    {control.err.genre && <p className="error">{control.err.genre.message || 'Error!!!'}</p>}
  </div>
);

export default InputGenre;
