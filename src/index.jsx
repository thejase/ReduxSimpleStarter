import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import { YOUTUBE_API_KEY } from '../api-keys';
import SearchBar from './components/search-bar';

// Create a new component.  Should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    YTSearch(
      { key: YOUTUBE_API_KEY, term: 'surfboards' },
      (videos) => { this.setState({ videos }); },
    );
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
// take component and put on the page
ReactDOM.render(<App />, document.getElementById('root'));
