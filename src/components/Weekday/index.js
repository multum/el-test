import React, {Component} from 'react';

export default class Weekday extends Component {
  render() {
    const {weekday, className, localeUtils, locale} = this.props;
    const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);
    return (
      <div className={className} title={weekdayName}>
        {weekdayName.slice(0, 1)}
      </div>
    );
  }
}
