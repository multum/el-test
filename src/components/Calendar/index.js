import React, {Component} from 'react';
import {connect} from 'react-redux';


import DayPicker, {DateUtils} from 'react-day-picker';
import CalendarInputs from '../CalendarInputs/index';

import 'react-day-picker/lib/style.css';

import css from './Calendar.css';

import grid from '../../styles/grid.css';
import typography from '../../styles/typography.css';

import {SET_DATES} from "../../constans/calendar";

class Calendar extends Component {

  isSelectingFirstDay(from, to, day) {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    console.log(!from || isBeforeFirstDay || isRangeSelected);
    return !from || isBeforeFirstDay || isRangeSelected;
  }
  focusInput(input) {
    return () => {
      const {startDate} = this.props.dates;
      if(input === 'start') {
        this.props.datesChange({
          startDate: null,
          endDate: null,
          enteredTo: null
        });
      }
      else if(input === 'end'){
        this.props.datesChange({
          startDate: startDate,
          endDate: null,
          enteredTo: null
        });
      }
    }
  }
  handleDayMouseEnter = (day) => {
    const {startDate, endDate} = this.props.dates;
    if (!this.isSelectingFirstDay(startDate, endDate, day)) {

      this.props.datesChange({
        startDate,
        endDate,
        enteredTo: day
      });
    }
  };

  handleDayClick = (day) => {
    const {startDate, endDate} = this.props.dates;

    if (!this.isSelectingFirstDay(startDate, endDate, day)) {
      this.props.datesChange({
        startDate,
        endDate: day,
        enteredTo: day
      });
    } else {
      this.props.datesChange({
        startDate: day,
        endDate: null,
        enteredTo: null
      });
    }
  };

  render() {
    const {startDate, enteredTo} = this.props.dates;
    const selectedDays = [startDate, {from: startDate, to: enteredTo}];
    const disabledDays = { before: startDate};
    const modifiers = { [css.start]: startDate, [css.end]: enteredTo }
    return (
      <div className={grid.container}>
        <h2 className={typography.h2}>Calendar</h2>
        <CalendarInputs onSelectStart={this.focusInput('start')} onSelectEnd={this.focusInput('end')}/>
        <DayPicker
          className={css.calendar}
          classNames={css}
          numberOfMonths={2}
          fromMonth={this.props.startDate}
          selectedDays={selectedDays}
          modifiers={modifiers}
          disabledDays={disabledDays}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dates: state.calendarReducer
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datesChange(dates) {
      dispatch({
        type: SET_DATES,
        ...dates
      });
    },
  //   setEnteredDay(enteredTo) {
  //     dispatch({
  //       type: SET_ENTERED_DAY,
  //       enteredTo
  //     });
  //   },
  //   focusedInputChange(focusedInput) {
  //     dispatch({
  //       type: SET_FOCUS_INPUT,
  //       focusedInput
  //     });
  //   }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);