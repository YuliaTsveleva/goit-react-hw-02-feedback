import React from 'react';
import './FeedbackOptions.module.css';
import s from './FeedbackOptions.module.css';
import statisticsFields from '../../data/statisticsFields.json';

class FeedbackOptions extends React.Component {
  render() {
    return (
      <div className={s.FeedbackOptions}>
        <h1>Statistics</h1>
        <ul>
          <li>
            {statisticsFields.map(stat => (
              <p>
                {stat.name}:<span></span>
              </p>
            ))}
          </li>
        </ul>
      </div>
    );
  }
}

export default FeedbackOptions;
