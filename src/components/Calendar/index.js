import React, {Component} from 'react';

import DayPicker, {DateUtils} from 'react-day-picker';
import CalendarInputs from '../CalendarInputs/index';
import Weekday from '../Weekday/index';

import css from './Calendar.css';
import cssDayPicker from './DayPicker.css';
import grid from '../../styles/grid.css';
import typography from '../../styles/typography.css';

import {Resp, throttle} from "../../helpers/common";

export default class Calendar extends Component {
  state = {
    numberOfMonths: 2,
    enteredTo: null
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.setNumberOfMonths();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  resize = throttle(() => {
    this.setNumberOfMonths();
  }, 100, this);

  setNumberOfMonths = () => {
    const numberOfMonths = Resp.isTablet() ? 1 : 2;
    if (numberOfMonths !== this.state.numberOfMonths) {
      this.setState({numberOfMonths});
    }
  };

  isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  };

  focusInput = (input) => {
    const {startDate} = this.props.dates;
    return () => {
      if (input === 'start') {
        this.props.datesChange({
          startDate: null,
          endDate: null
        });
      }
      else if (input === 'end') {
        this.props.datesChange({
          startDate: startDate,
          endDate: null
        });
      }
    };
  };
  handleDayMouseEnter = (day) => {
    const {startDate, endDate} = this.props.dates;
    if (!this.isSelectingFirstDay(startDate, endDate, day)) {
      this.setState({
        enteredTo: day
      });
    }
  };
  handleDayClick = (day) => {
    const {startDate, endDate} = this.props.dates;
    if (this.isSelectingFirstDay(startDate, endDate, day)) {
      this.props.datesChange({
        startDate: day,
        endDate: null
      });
    } else {
      this.props.datesChange({
        startDate,
        endDate: day
      });
    }
  };

  render() {

    const {startDate} = this.props.dates;
    const selectedDays = [startDate, {from: startDate, to: this.state.enteredTo}];
    const disabledDays = {before: startDate};
    const modifiers = {[cssDayPicker.start]: startDate, [cssDayPicker.end]: this.state.enteredTo};

    return (
      <div className={grid.smContainer}>
        <h2 className={typography.h2}>Calendar</h2>
        <div className={css.wrapper}>

          <CalendarInputs {...this.props.dates} onSelectStart={this.focusInput('start')}
                          onSelectEnd={this.focusInput('end')}/>

          <DayPicker
            weekdayElement={<Weekday/>}
            className={cssDayPicker.calendar}
            classNames={cssDayPicker}
            numberOfMonths={this.state.numberOfMonths}
            fromMonth={startDate}
            selectedDays={selectedDays}
            modifiers={modifiers}
            disabledDays={disabledDays}
            onDayClick={this.handleDayClick}
            onDayMouseEnter={this.handleDayMouseEnter}
          />

        </div>
      </div>
    );
  }
};
