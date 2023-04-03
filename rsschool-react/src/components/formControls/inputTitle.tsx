import { InputControl } from '../types/types';

const InputTitle = (control: InputControl) => (
  <div>
    <label>Title:</label>
    <input
      {...control.reg('title', {
        required: 'The field is required',
        minLength: {
          value: 5,
          message: 'Minimum length 5 characters',
        },
      })}
    />
    <div className="error">{control.err?.title && (control.err?.title?.message || 'Error!!!')}</div>
  </div>
);

export default InputTitle;
