import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <ul className={s.FeedbackButtonList}>
        {options.map(elem => {
          return (
            <li key={elem.id}>
              <button
                type="button"
                onClick={onLeaveFeedback}
                className={s.FeedbackButton}
              >
                {elem.name}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(Object).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
