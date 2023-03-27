import React from 'react';
import BrandSelect from '../components/inputpage/BrandSelect';
import InputProduct from '../components/inputpage/InputProduct';
import InputData from '../components/inputpage/InputData';
import InputSex from '../components/inputpage/InputSex';
import InputFile from '../components/inputpage/InputFile';
import InputAccept from '../components/inputpage/InputAccept';

class Inputpage extends React.Component<{}, { text: string }> {
  private inputBrand: React.RefObject<HTMLSelectElement>;
  private inputBrandError: React.RefObject<HTMLDivElement>;
  private inputName: React.RefObject<HTMLInputElement>;
  private inputNameError: React.RefObject<HTMLDivElement>;
  private inputDate: React.RefObject<HTMLInputElement>;
  private inputDateError: React.RefObject<HTMLDivElement>;
  private inputSexMale: React.RefObject<HTMLInputElement>;
  private inputSexFemale: React.RefObject<HTMLInputElement>;
  private inputSexError: React.RefObject<HTMLDivElement>;
  private inputFile: React.RefObject<HTMLInputElement>;
  private inputFileError: React.RefObject<HTMLDivElement>;
  private inputAccept: React.RefObject<HTMLInputElement>;
  private inputAcceptError: React.RefObject<HTMLDivElement>;

  constructor(props: Readonly<{}>) {
    super(props);
    this.inputBrand = React.createRef();
    this.inputBrandError = React.createRef();
    this.inputName = React.createRef();
    this.inputNameError = React.createRef();
    this.inputDate = React.createRef();
    this.inputDateError = React.createRef();
    this.inputSexMale = React.createRef();
    this.inputSexFemale = React.createRef();
    this.inputSexError = React.createRef();
    this.inputFile = React.createRef();
    this.inputFileError = React.createRef();
    this.inputAccept = React.createRef();
    this.inputAcceptError = React.createRef();
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (this.inputBrand.current !== null) {
            console.log('Choose a BRAND: ', this.inputBrand.current.value);

            if (this.inputBrandError.current !== null) {
              if (this.inputBrand.current.value === 'choose') {
                this.inputBrandError.current.innerHTML = 'ERROR! please choose brand!';
              } else {
                this.inputBrandError.current.innerHTML = '';
              }
            }
          }

          if (this.inputName.current !== null) {
            console.log('Product name: ', this.inputName.current.value);

            if (this.inputNameError.current !== null) {
              if (this.inputName.current.value === '') {
                this.inputNameError.current.innerHTML = 'ERROR! please enter product name!';
              } else {
                this.inputNameError.current.innerHTML = '';
              }
            }
          }

          if (this.inputDate.current !== null) {
            console.log('Planned date of arrival at the warehouse: ', this.inputDate.current.value);

            if (this.inputDateError.current !== null) {
              if (this.inputDate.current.value === '') {
                this.inputDateError.current.innerHTML = 'ERROR! please choose arrival date!';
              } else {
                this.inputDateError.current.innerHTML = '';
              }
            }
          }

          if (this.inputSexMale.current !== null && this.inputSexFemale.current !== null) {
            console.log('Gender 1: ', this.inputSexMale.current.checked);
            console.log('Gender 2: ', this.inputSexFemale.current.checked);

            if (this.inputSexError.current !== null) {
              if (
                this.inputSexMale.current.checked === false &&
                this.inputSexFemale.current.checked === false
              ) {
                this.inputSexError.current.innerHTML = 'ERROR! please choose gender!';
              } else {
                this.inputSexError.current.innerHTML = '';
              }
            }
          }

          if (this.inputFile.current !== null) {
            console.log('Image file: ', this.inputFile.current.value);

            if (this.inputFileError.current !== null) {
              if (this.inputFile.current.value === '') {
                this.inputFileError.current.innerHTML = 'ERROR! please choose file!';
              } else {
                this.inputFileError.current.innerHTML = '';
              }
            }
          }

          if (this.inputAccept.current !== null) {
            console.log('Accept upload: ', this.inputAccept.current.checked);

            if (this.inputAcceptError.current !== null) {
              if (this.inputAccept.current.checked === false) {
                this.inputAcceptError.current.innerHTML = 'ERROR! please accept info!';
              } else {
                this.inputAcceptError.current.innerHTML = '';
              }
            }
          }
        }}
      >
        <h2>Input product card info:</h2>
        <BrandSelect brandref={this.inputBrand} brandErrorRef={this.inputBrandError} />
        <InputProduct anyref={this.inputName} nameErrorRef={this.inputNameError} />
        <InputData anyref={this.inputDate} dataErrorRef={this.inputDateError} />
        <InputSex
          maleRef={this.inputSexMale}
          femaleRef={this.inputSexFemale}
          sexErrorRef={this.inputSexError}
        />
        <InputFile fileRef={this.inputFile} fileErrorRef={this.inputFileError} />
        <InputAccept acceptRef={this.inputAccept} acceptErrorRef={this.inputAcceptError} />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Inputpage;
