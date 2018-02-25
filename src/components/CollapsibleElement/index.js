import React from 'react';
import classNames from 'classnames';
import ImageLoader from '../ImageLoader';

import css from './CollapsibleElement.css';

const CollapsibleElement = props => {
  let wrapper = null;
  const {title, content, active: isActive} = props;

  const contentToggle = () => {
    wrapper.classList.toggle(css.contentShow);
  };

  return (
    <div className={classNames(
      css.wrapper,
      {[css.contentShow]: isActive}
    )} ref={(element) => wrapper = element}>
      <div className={css.title} onClick={contentToggle}>
        <i className={css.ico} style={{backgroundColor: title.icoBackgroundColor}}>
          <ImageLoader src={title.ico}/>
        </i>
        <p>{title.text}</p>
      </div>
      <div className={css.content} dangerouslySetInnerHTML={{__html: content}}/>
    </div>
  );
};

export default CollapsibleElement;