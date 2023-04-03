import { InputControl } from '../types/types';

const InputAccept = (contol: InputControl) => (
  <div>
    <label>Accept card upload </label>
    <input type="checkbox" {...contol.reg('accept', { required: 'Input needs to be confirmed' })} />
    <div className="error">{contol.err?.accept && (contol.err?.accept?.message || 'Error!!!')}</div>
  </div>
);

export default InputAccept;
