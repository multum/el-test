import React from 'react';

const Weekday = props => {

  const {weekday, className, localeUtils, locale} = props;
  const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);

  return <div className={className} title={weekdayName}>{weekdayName.slice(0, 1)}</div>;
};

export default Weekday;
