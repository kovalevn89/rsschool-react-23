import React from 'react';
import './Search.css';

class Search extends React.Component<{}, { text: string }> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search.."
          value={this.state.text}
          onChange={(e) => {
            this.setState({ text: e.target.value });
            localStorage.setItem('searchbar', e.target.value);
          }}
        ></input>
      </div>
    );
  }

  componentDidMount() {
    const temp_text = localStorage.getItem('searchbar');

    if (temp_text !== null) {
      this.setState({ text: temp_text });
    }
  }
}

export default Search;
