import { InputControl } from '../types/types';

const InputPremiere = (control: InputControl) => (
  <div>
    <label className="form__label">
      <span>Date:</span>
      <input
        className="singleInput"
        type="date"
        {...control.reg('worldPremiere', {
          required: 'The field is required',
        })}
      />
    </label>
    {control.err.worldPremiere && (
      <p className="error">{control.err.worldPremiere.message || 'Error!!!'}</p>
    )}
  </div>
);

export default InputPremiere;
