import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      term: '',
    };
  }
  handleInputChange(e) {
    const { target: { value } } = e;

    this.setState({ term: value });
  }

  render() {
    const { term } = this.state;

    return (
      <div>
        <input
          onChange={this.handleInputChange}
          value={term}
        />
      </div>
    );
  }
}

export default SearchBar;
