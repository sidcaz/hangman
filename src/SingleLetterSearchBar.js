import React from 'react';


// Use this class to allow the user to enter a letter
// this class needs a function passed as a prop called onSearch to handle the user's request
class SingleLetterSearchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleInputChange = (event) => {
    const value = event.target.value.charAt(0).toUpperCase(); // Get first character and convert to uppercase
    this.setState({ inputValue: value });
  };
   handleSearchClick = () => {
    const { inputValue } = this.state;
    if (inputValue.length === 1) {
      this.props.onSearch(inputValue);
      this.setState({ inputValue: '' });
    } else {
      // Optionally, you can provide feedback to the user if the input is invalid
      alert('Please enter a single letter.');
    }
  };

  render() {
    return (
      <div className="input-section">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          maxLength={1}
          placeholder="Enter a letter"
          className="letter-input"
        />
        <button onClick={this.handleSearchClick} className="guess-btn">
          Guess
        </button>
      </div>
    );
  }
}

export default SingleLetterSearchbar;       