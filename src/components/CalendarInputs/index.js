import React, {Component} from 'react';
import {connect} from 'react-redux';

import css from './CalendarInputs.css';

class CalendarInputs extends Component {
  formatDate(date) {
    if (date) return new Date(date).toLocaleDateString().replace(/\./g, '/');
    return '--/--/--';
  }

  selectedDays() {
    const {startDate, endDate} = this.props;

    if (startDate && endDate) {
      const delta = Math.abs(startDate - endDate) / 1000;
      return Math.floor(delta / 86400) + 1;
    } else {
      return '--';
    }
  }

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.item} onClick={this.props.onSelectStart}>
            <span>Departure</span>
            <p>{this.formatDate(this.props.startDate)}</p>
          </div>
          <div className={css.item} onClick={this.props.onSelectEnd}>
            <span>Arriving</span>
            <p>{this.formatDate(this.props.endDate)}</p>
          </div>
        </div>
        <div className={`${css.item} ${css.counter}`}>
          <span>Days</span>
          <p>{this.selectedDays()}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.calendarReducer
  };
};

export default connect(mapStateToProps)(CalendarInputs);