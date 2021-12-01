import React from 'react';
import './Statistics.module.css';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';
// import statisticsFields from '../../data/statisticsFields.json';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <div className={s.Statistics}>
    <h1>Statistics</h1>
    <ul>
      <li>
        Good:
        <span>{good}</span>
      </li>
      <li>
        Neutral:
        <span>{neutral}</span>
      </li>
      <li>
        Bad:
        <span>{bad}</span>
      </li>
      <li>
        Total:
        <span>{total}</span>
      </li>
      <li>
        Positive feedback:
        <span>{percentage}%</span>
      </li>
    </ul>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
