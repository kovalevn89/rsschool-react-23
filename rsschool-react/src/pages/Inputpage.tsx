import React from 'react';

/*
dropdown/select 	- фирма производитель
text input 		- имя товара
date input 		- дата поступления на склад
switcher (radio)	- пол (мужской/женский) 

file upload (image)	- фото товара
checkbox		- подтверждение, данные заполнены верно.
*/

// brand
class BrandSelect extends React.Component<{ brandref: React.RefObject<HTMLSelectElement> }, {}> {
  constructor(
    props: Readonly<{
      brandref: React.RefObject<HTMLSelectElement>;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor="pet-select">Choose a BRAND:</label>
        <select name="pets" id="pet-select" ref={this.props.brandref}>
          <option value="choose">--Please choose an brand--</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="puma">Puma</option>
        </select>
      </div>
    );
  }
}

// Product name
class InputProduct extends React.Component<{ anyref: React.RefObject<HTMLInputElement> }, {}> {
  constructor(
    props: Readonly<{
      anyref: React.RefObject<HTMLInputElement>;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Product name: </label>
        <input type="text" name="prod-name" ref={this.props.anyref} />
      </div>
    );
  }
}

// date
class InputData extends React.Component<{ anyref: React.RefObject<HTMLInputElement> }, {}> {
  constructor(
    props: Readonly<{
      anyref: React.RefObject<HTMLInputElement>;
    }>
  ) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Planned date of arrival at the warehouse: </label>
        <input type="date" name="data" id="date-input" ref={this.props.anyref} />
      </div>
    );
  }
}

// SEX
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

class Inputpage extends React.Component<{}, { text: string }> {
  private inputBrand: React.RefObject<HTMLSelectElement>;
  private inputName: React.RefObject<HTMLInputElement>;
  private inputRef: React.RefObject<HTMLInputElement>;
  private inputSexMale: React.RefObject<HTMLInputElement>;
  private inputSexFemale: React.RefObject<HTMLInputElement>;

  constructor(props: Readonly<{}>) {
    super(props);
    this.inputRef = React.createRef();
    this.inputName = React.createRef();
    this.inputBrand = React.createRef();
    this.inputSexMale = React.createRef();
    this.inputSexFemale = React.createRef();
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (this.inputBrand.current !== null) {
            console.log('Choose a BRAND: ', this.inputBrand.current.value);
          }

          if (this.inputName.current !== null) {
            console.log('Product name: ', this.inputName.current.value);
          }

          if (this.inputRef.current !== null) {
            console.log('Planned date of arrival at the warehouse: ', this.inputRef.current.value);
          }

          if (this.inputSexMale.current !== null) {
            console.log('Gender 1: ', this.inputSexMale.current.checked);
          }

          if (this.inputSexFemale.current !== null) {
            console.log('Gender 2: ', this.inputSexFemale.current.checked);
          }
        }}
      >
        <BrandSelect brandref={this.inputBrand} />
        <InputProduct anyref={this.inputName} />
        <InputData anyref={this.inputRef} />
        <InputSex maleRef={this.inputSexMale} femaleRef={this.inputSexFemale} />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Inputpage;
