import React from 'react';
import './FeedbackOptions.module.css';
import s from './FeedbackOptions.module.css';
// import statisticsFields from '../../data/statisticsFields.json';

class FeedbackOptions extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className={s.FeedbackOptions}>
        <h1>Statistics</h1>
        <ul>
          {/* {statisticsFields.map(stat => (
            <li key={stat.id}>
              {stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}:
              <span>{this.state}</span>
            </li>
          ))} */}
          <li>
            Good:
            <span>{this.state.good}</span>
          </li>
          <li>
            Neutral:
            <span>{this.state.neutral}</span>
          </li>
          <li>
            Bad:
            <span>{this.state.bad}</span>
          </li>
          <li>
            Total:
            <span>{this.state.good + this.state.neutral + this.state.bad}</span>
          </li>
          <li>
            Positive feedback:
            <span>{}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default FeedbackOptions;
