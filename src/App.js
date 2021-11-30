import React from 'react';
import './App.css';
import Feedbacker from './Components/Feedbacker/Feedbacker';
import FeedbackOptions from './Components/Feedbacker/FeedbackOptions';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Feedbacker />
        <FeedbackOptions />
      </div>
    );
  }
}

export default App;
