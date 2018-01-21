import React from 'react';
import ReactDOM from 'react-dom';

import { YOUTUBE_API_KEY } from '../api-keys';
import SearchBar from './components/search-bar';

console.log(YOUTUBE_API_KEY);

// Create a new component.  Should produce some HTML
const App = () => (
  <div>
    <SearchBar />
  </div>
);
// take component and put on the page
ReactDOM.render(<App />, document.getElementById('root'));
