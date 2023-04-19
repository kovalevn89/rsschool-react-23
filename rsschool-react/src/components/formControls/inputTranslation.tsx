import { InputControl } from '../types/types';

const InputCover = (control: InputControl) => (
  <div>
    <label className="form__label">
      <span>Alive:</span>
      <label>
        <input
          type="radio"
          value="yes"
          {...control.reg('translationToRussian', { required: 'Please choose radio' })}
        />
        yes
      </label>
      <label>
        <input
          type="radio"
          value="no"
          {...control.reg('translationToRussian', { required: 'Please choose radio' })}
        />
        no
      </label>
    </label>
    {control.err.translationToRussian && (
      <p className="error">{control.err.translationToRussian.message || 'Error!!!'}</p>
    )}
  </div>
);

export default InputCover;
