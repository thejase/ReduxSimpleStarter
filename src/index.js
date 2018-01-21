import React from 'react';
import ReactDOM from 'react-dom';
import { YOUTUBE_API_KEY } from '../api-keys';

// Create a new component.  Should produce some HTML
const App = () => <div>Hi!</div>;
// take component and put on the page
ReactDOM.render(<App />, document.getElementById('root'));
