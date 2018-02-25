import Calendar from '../components/Calendar';
import {connect} from 'react-redux';

import {datesChange} from "../api/calendar";

const mapStateToProps = state => {
  return {
    dates: state.calendarReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    datesChange: dates => dispatch(datesChange(dates))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);