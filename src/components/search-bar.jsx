import React, { Component } from 'react';

class SearchBar extends Component {
  handleInputChange(e) {
    const { target: { value } } = e;
    console.log({ value });
  }

  render() {
    return <input onChange={this.handleInputChange} />;
  }
}

export default SearchBar;
