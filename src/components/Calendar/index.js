import React from 'react';
import {connect} from 'react-redux';


import DayPicker, {DateUtils} from 'react-day-picker';
import CalendarInputs from '../CalendarInputs/index';
import Weekday from '../Weekday/index';

import 'react-day-picker/lib/style.css';
import cssDayPicker from './DayPicker.css';
import css from './Calendar.css';
import grid from '../../styles/grid.css';
import typography from '../../styles/typography.css';

import {SET_DATES} from "../../constans/calendar";


const Calendar = props => {

  const {startDate, endDate, enteredTo} = props.dates;
  const {datesChange} = props;

  const selectedDays = [startDate, {from: startDate, to: enteredTo}];
  const disabledDays = {before: startDate};
  const modifiers = {[cssDayPicker.start]: startDate, [cssDayPicker.end]: enteredTo};

  const isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  };

  const focusInput = (input) => {
    return () => {
      if (input === 'start') {
        datesChange({
          startDate: null,
          endDate: null,
          enteredTo: null
        });
      }
      else if (input === 'end') {
        datesChange({
          startDate: startDate,
          endDate: null,
          enteredTo: null
        });
      }
    };
  };

  const handleDayMouseEnter = (day) => {
    if (!isSelectingFirstDay(startDate, endDate, day)) {
      datesChange({
        startDate,
        endDate,
        enteredTo: day
      });
    }
  };

  const handleDayClick = (day) => {
    if (isSelectingFirstDay(startDate, endDate, day)) {
      datesChange({
        startDate: day,
        endDate: null,
        enteredTo: null
      });
    } else {
      datesChange({
        startDate,
        endDate: day,
        enteredTo: day
      });
    }
  };


  return (
    <div className={grid.smContainer}>
      <h2 className={typography.h2}>Calendar</h2>
      <div className={css.wrapper}>

        <CalendarInputs onSelectStart={focusInput('start')} onSelectEnd={focusInput('end')}/>

        <DayPicker
          weekdayElement={<Weekday/>}
          className={cssDayPicker.calendar}
          classNames={cssDayPicker}
          numberOfMonths={2}
          fromMonth={startDate}
          selectedDays={selectedDays}
          modifiers={modifiers}
          disabledDays={disabledDays}
          onDayClick={handleDayClick}
          onDayMouseEnter={handleDayMouseEnter}
        />

      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dates: state.calendarReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    datesChange: dates => dispatch({
      type: SET_DATES,
      ...dates
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);