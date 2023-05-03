import { InputControl } from '../types/types';

const InputDescription = (control: InputControl) => (
  <div>
    <label className="form__label">
      <span>Description:</span>
      <input
        className="singleInput"
        {...control.reg('description', {
          required: 'The field is required',
          minLength: {
            value: 10,
            message: 'Minimum length 10 characters',
          },
        })}
      />
    </label>
    {control.err.description && (
      <p className="error">{control.err.description.message || 'Error!!!'}</p>
    )}
  </div>
);

export default InputDescription;
