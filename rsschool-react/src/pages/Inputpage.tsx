import React from 'react';
import BrandSelect from '../components/inputpage/BrandSelect';
import InputProduct from '../components/inputpage/InputProduct';
import InputData from '../components/inputpage/InputData';
import InputSex from '../components/inputpage/InputSex';
import InputFile from '../components/inputpage/InputFile';
import InputAccept from '../components/inputpage/InputAccept';
import Card2 from '../components/card/Card2';

interface ICard {
  brand: string;
  name: string;
  date: string;
  gender: string;
  image: File | null;
}

class Inputpage extends React.Component<{}> {
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
  private cardListRef: React.RefObject<HTMLDivElement>;

  private controlFormRef: React.RefObject<HTMLFormElement>;

  state: { cardList: ICard[] };

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
    this.cardListRef = React.createRef();
    this.controlFormRef = React.createRef();
    this.state = { cardList: [] };
  }

  render() {
    return (
      <div>
        <form
          ref={this.controlFormRef}
          onSubmit={(event) => {
            event.preventDefault();

            let isError = false;

            if (this.inputBrand.current !== null) {
              if (this.inputBrandError.current !== null) {
                if (this.inputBrand.current.value === 'choose') {
                  this.inputBrandError.current.innerHTML = 'ERROR! please choose brand!';
                  isError = true;
                } else {
                  this.inputBrandError.current.innerHTML = '';
                }
              }
            }

            if (this.inputName.current !== null) {
              if (this.inputNameError.current !== null) {
                if (this.inputName.current.value === '') {
                  this.inputNameError.current.innerHTML = 'ERROR! please enter product name!';
                  isError = true;
                } else {
                  this.inputNameError.current.innerHTML = '';
                }
              }
            }

            if (this.inputDate.current !== null) {
              if (this.inputDateError.current !== null) {
                if (this.inputDate.current.value === '') {
                  this.inputDateError.current.innerHTML = 'ERROR! please choose arrival date!';
                  isError = true;
                } else {
                  this.inputDateError.current.innerHTML = '';
                }
              }
            }

            if (this.inputSexMale.current !== null && this.inputSexFemale.current !== null) {
              if (this.inputSexError.current !== null) {
                if (
                  this.inputSexMale.current.checked === false &&
                  this.inputSexFemale.current.checked === false
                ) {
                  this.inputSexError.current.innerHTML = 'ERROR! please choose gender!';
                  isError = true;
                } else {
                  this.inputSexError.current.innerHTML = '';
                }
              }
            }

            if (this.inputFile.current !== null) {
              if (this.inputFileError.current !== null) {
                if (this.inputFile.current.value === '') {
                  this.inputFileError.current.innerHTML = 'ERROR! please choose file!';
                  isError = true;
                } else {
                  this.inputFileError.current.innerHTML = '';
                }
              }
            }

            if (this.inputAccept.current !== null) {
              if (this.inputAcceptError.current !== null) {
                if (this.inputAccept.current.checked === false) {
                  this.inputAcceptError.current.innerHTML = 'ERROR! please accept info!';
                  isError = true;
                } else {
                  this.inputAcceptError.current.innerHTML = '';
                }
              }
            }

            if (isError === false) {
              if (this.inputFile.current!.files !== null) {
                const card: ICard = {
                  brand: this.inputBrand.current!.value,
                  name: this.inputName.current!.value,
                  date: this.inputDate.current!.value,
                  gender: this.inputSexMale.current!.checked ? 'male' : 'female',
                  image: this.inputFile.current!.files[0],
                };

                const temp = this.state.cardList;
                temp.push(card);
                this.setState({ cardList: temp });
                this.controlFormRef.current!.reset();
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
        <h2>Cards list:</h2>
        <div ref={this.cardListRef}>
          {this.state.cardList.map((item, index) => (
            <Card2
              key={String(index + 1)}
              mkey={String(index + 1)}
              brand={item.brand}
              name={item.name}
              date={item.date}
              gender={item.gender}
              image={item.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Inputpage;
