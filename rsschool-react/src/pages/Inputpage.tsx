import React from 'react';
import BrandSelect from '../components/inputpage/BrandSelect';
import InputProduct from '../components/inputpage/InputProduct';
import InputData from '../components/inputpage/InputData';
import InputSex from '../components/inputpage/InputSex';
import InputFile from '../components/inputpage/InputFile';
import InputAccept from '../components/inputpage/InputAccept';

class Inputpage extends React.Component<{}, { text: string }> {
  private inputBrand: React.RefObject<HTMLSelectElement>;
  private inputName: React.RefObject<HTMLInputElement>;
  private inputDate: React.RefObject<HTMLInputElement>;
  private inputSexMale: React.RefObject<HTMLInputElement>;
  private inputSexFemale: React.RefObject<HTMLInputElement>;
  private inputFile: React.RefObject<HTMLInputElement>;
  private inputAccept: React.RefObject<HTMLInputElement>;

  constructor(props: Readonly<{}>) {
    super(props);
    this.inputDate = React.createRef();
    this.inputName = React.createRef();
    this.inputBrand = React.createRef();
    this.inputSexMale = React.createRef();
    this.inputSexFemale = React.createRef();
    this.inputFile = React.createRef();
    this.inputAccept = React.createRef();
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

          if (this.inputDate.current !== null) {
            console.log('Planned date of arrival at the warehouse: ', this.inputDate.current.value);
          }

          if (this.inputSexMale.current !== null) {
            console.log('Gender 1: ', this.inputSexMale.current.checked);
          }

          if (this.inputSexFemale.current !== null) {
            console.log('Gender 2: ', this.inputSexFemale.current.checked);
          }

          if (this.inputFile.current !== null) {
            console.log('Image file: ', this.inputFile.current.value);
          }

          if (this.inputAccept.current !== null) {
            console.log('Accept upload: ', this.inputAccept.current.checked);
          }
        }}
      >
        <h2>Input product card info:</h2>
        <BrandSelect brandref={this.inputBrand} />
        <InputProduct anyref={this.inputName} />
        <InputData anyref={this.inputDate} />
        <InputSex maleRef={this.inputSexMale} femaleRef={this.inputSexFemale} />
        <InputFile fileRef={this.inputFile} />
        <InputAccept acceptRef={this.inputAccept} />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Inputpage;
