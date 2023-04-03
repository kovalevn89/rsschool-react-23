import { InputControl } from '../types/types';

const InputTitle = (control: InputControl) => (
  <div>
    <label className="form__label">
      <span>Title:</span>
      <input
        className="singleInput"
        {...control.reg('title', {
          required: 'The field is required',
          minLength: {
            value: 5,
            message: 'Minimum length 5 characters',
          },
        })}
      />
    </label>
    {control.err.title && <p className="error">{control.err.title.message || 'Error!!!'}</p>}
  </div>
);

export default InputTitle;
