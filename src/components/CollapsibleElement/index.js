import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import css from './CollapsibleElement.css';

class CollapsibleElement extends Component {
  contentToggle() {
    this.wrapper.classList.toggle(css.contentActive);
  }

  wrapperClass() {
    return classNames(
      css.wrapper,
      {
        [css.contentActive]: this.props.active
      }
    );
  }

  render() {
    return (
      <div className={`${this.wrapperClass()} `} ref={(element) => this.wrapper = element}>
        <div className={css.title} onClick={this.contentToggle.bind(this)}>
          <i style={{backgroundColor: this.props.title.icoBackgroundColor}}>
            <img src={process.env.PUBLIC_URL + this.props.title.ico} alt=""/>
          </i>
          <p>{this.props.title.text}</p>
        </div>
        <div className={css.content} dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </div>
    );
  }
}

export default connect()(CollapsibleElement);