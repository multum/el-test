import React, {Component} from 'react';

import classNames from 'classnames';
import ImageLoader from '../ImageLoader/index';

import css from './Contacts.css';
import typography from '../../styles/typography.css';
import grid from '../../styles/grid.css';
import uiKit from '../../styles/uikit.css';

export default class Contacts extends Component {
  componentDidMount() {
    this.props.getContactsData();
  }

  render() {
    return (
      <div className={grid.smContainer}>
        <h2 className={typography.h2}>Contact us</h2>
        <div className={css.wrapper}>
          {
            this.props.data && this.props.data.map((contact, index) => {
              return <a target={'_blank'} href={contact.href} className={css.item} key={index}>
                <div className={css.name}>
                  <i className={css.ico} style={{backgroundColor: contact.icoBackgroundColor}}>
                    <ImageLoader src={contact.ico}/>
                  </i>
                  <p>{contact.name}</p>
                </div>
                <div className={classNames(css.button, uiKit.blueButton)}>
                  <span>{contact.buttonText}</span>
                </div>
              </a>;
            })
          }
        </div>
      </div>
    );
  }
};
