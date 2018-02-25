import React from 'react';

import css from './CalendarInputs.css';

const CalendarInputs = (props) => {
  const {startDate, endDate, onSelectStart, onSelectEnd} = props;

  const formatDate = (date) => {
    if (date) return new Date(date).toLocaleDateString().replace(/\./g, '/');
    return '--/--/--';
  };

  const selectedDays = () => {
    if (startDate && endDate) {
      const delta = Math.abs(startDate - endDate) / 1000;
      return Math.floor(delta / 86400) + 1;
    } else return '--';
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.item} onClick={onSelectStart}>
          <span>Departure</span>
          <p>{formatDate(startDate)}</p>
        </div>
        <div className={css.item} onClick={onSelectEnd}>
          <span>Arriving</span>
          <p>{formatDate(endDate)}</p>
        </div>
      </div>
      <div className={`${css.item} ${css.counter}`}>
        <span>Days</span>
        <p>{selectedDays()}</p>
      </div>
    </div>
  );
};

export default CalendarInputs;