import { InputControl } from '../types/types';

const InputCover = (control: InputControl) => (
  <div>
    <label>Film cover:</label>
    <input
      type="file"
      accept="image/*"
      {...control.reg('cover', { required: 'Please cover image' })}
    />
    <div className="error">{control.err?.cover && (control.err?.cover?.message || 'Error!!!')}</div>
  </div>
);

export default InputCover;
