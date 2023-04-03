import { InputControl } from '../types/types';

const InputCover = (control: InputControl) => (
  <div>
    <label>Translation to Russian:</label>
    <input
      type="radio"
      value="yes"
      {...control.reg('translationToRussian', { required: 'Please choose radio' })}
    />
    <label>yes</label>
    <input
      type="radio"
      value="no"
      {...control.reg('translationToRussian', { required: 'Please choose radio' })}
    />
    <label>no</label>
    <div className="error">
      {control.err?.translationToRussian &&
        (control.err?.translationToRussian?.message || 'Error!!!')}
    </div>
  </div>
);

export default InputCover;
