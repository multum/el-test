import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DayPickerRangeController} from 'react-dates';

import css from './Calendar.css';

import grid from '../../styles/grid.css';
import typography from '../../styles/typography.css';

import {RANGE_DATES_CHANGE, FOCUS_INPUT_CHANGE} from "../../constans/calendar";

class Calendar extends Component {
  render() {
    return (
      <div className={grid.container}>
        <h2 className={typography.h2}>Calendar</h2>
        <DayPickerRangeController
          numberOfMonths={2}
          daySize={50}
          horizontalMargin={30}
          verticalHeight={500}
          keepOpenOnDateSelect={true}
          startDate={this.props.dates.startDate}
          endDate={this.props.dates.endDate}
          onDatesChange={this.props.datesChange}
          focusedInput={this.props.dates.focusedInput}
          onFocusChange={this.props.focusedInputChange}
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
    datesChange({startDate, endDate}) {
      dispatch({
        type: RANGE_DATES_CHANGE,
        startDate,
        endDate
      });
    },
    focusedInputChange(focusedInput) {
      dispatch({
        type: FOCUS_INPUT_CHANGE,
        focusedInput
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);