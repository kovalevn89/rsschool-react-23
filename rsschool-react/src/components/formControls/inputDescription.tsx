import { InputControl } from '../types/types';

const InputDescription = (control: InputControl) => (
  <div>
    <label>Description:</label>
    <input
      {...control.reg('description', {
        required: 'The field is required',
        minLength: {
          value: 10,
          message: 'Minimum length 10 characters',
        },
      })}
    />
    <div className="error">
      {control.err?.description && (control.err?.description?.message || 'Error!!!')}
    </div>
  </div>
);

export default InputDescription;
