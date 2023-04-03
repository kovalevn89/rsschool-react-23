import { InputControl } from '../types/types';

const InputAccept = (contol: InputControl) => (
  <div>
    <label className="form__label">
      <span>Accept card upload:</span>
      <input
        type="checkbox"
        {...contol.reg('accept', { required: 'Input needs to be confirmed' })}
      />
    </label>
    {contol.err.accept && <p className="error">{contol.err.accept.message || 'Error!!!'}</p>}
  </div>
);

export default InputAccept;
