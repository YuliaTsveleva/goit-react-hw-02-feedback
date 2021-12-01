import React from 'react';
import './Feedbacker.module.css';
import s from './Feedbacker.module.css';

const Feedbacker = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => (
  <div className={s.Feedbacker}>
    <h1>Please leave feedback</h1>
    <ul className={s.FeedbackButtonList}>
      <li>
        <button
          type="button"
          onClick={onIncrementGood}
          className={s.FeedbackButton}
        >
          Good
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={onIncrementNeutral}
          className={s.FeedbackButton}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={onIncrementBad}
          className={s.FeedbackButton}
        >
          Bad
        </button>
      </li>
    </ul>
  </div>
);

export default Feedbacker;
