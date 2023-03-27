import React from 'react';

class InputSex extends React.Component<
  { maleRef: React.RefObject<HTMLInputElement>; femaleRef: React.RefObject<HTMLInputElement> },
  {}
> {
  constructor(
    props: Readonly<{
      maleRef: React.RefObject<HTMLInputElement>;
      femaleRef: React.RefObject<HTMLInputElement>;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Choose gender:</legend>
          <div>
            <input type="radio" id="huey" name="drone" value="male" ref={this.props.maleRef} />
            <label>Male</label>
          </div>

          <div>
            <input type="radio" id="dewey" name="drone" value="female" ref={this.props.femaleRef} />
            <label>Female</label>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default InputSex;
