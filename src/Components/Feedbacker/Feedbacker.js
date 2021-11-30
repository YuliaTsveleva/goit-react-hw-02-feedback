import React from 'react';
import './Feedbacker.module.css';
import s from './Feedbacker.module.css';
import buttonNames from '../../data/feedbackButtons.json';

class Feedbacker extends React.Component {
  render() {
    return (
      <div className={s.Feedbacker}>
        <h1>Please leave feedback</h1>
        <ul className={s.FeedbackButtonList}>
          {buttonNames.map(button => (
            <li key={button.id}>
              <button type="button" className={s.FeedbackButton}>
                {button.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Feedbacker;
