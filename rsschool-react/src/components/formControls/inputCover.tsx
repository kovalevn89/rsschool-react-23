import { InputControl } from '../types/types';

const InputCover = (control: InputControl) => (
  <div>
    <label className="form__label">
      <span>Film cover:</span>
      <input
        className="singleInput"
        type="file"
        accept="image/*"
        {...control.reg('cover', { required: 'Please cover image' })}
      />
    </label>
    {control.err.cover && <div className="error">{control.err.cover.message || 'Error!!!'}</div>}
  </div>
);

export default InputCover;
