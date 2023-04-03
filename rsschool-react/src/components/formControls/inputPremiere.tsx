import { InputControl } from '../types/types';

const InputPremiere = (control: InputControl) => (
  <div>
    <label>World Premiere:</label>
    <input
      type="date"
      {...control.reg('worldPremiere', {
        required: 'The field is required',
      })}
    />
    <div className="error">
      {control.err?.worldPremiere && (control.err?.worldPremiere?.message || 'Error!!!')}
    </div>
  </div>
);

export default InputPremiere;
