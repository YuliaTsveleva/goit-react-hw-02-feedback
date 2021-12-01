import React from 'react';
import './App.css';
import Feedbacker from './Components/Feedbacker/Feedbacker';
import FeedbackOptions from './Components/Feedbacker/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  incrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  incrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Feedbacker
          onIncrementGood={this.incrementGood}
          onIncrementNeutral={this.incrementNeutral}
          onIncrementBad={this.incrementBad}
        />
        <FeedbackOptions />
      </div>
    );
  }
}

export default App;
