import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import Link from '../Link/index';

import {FETCH_CONTACTS_DATA} from "../../constans/contacts";
import {fetchContacts} from "../../api/contacts";

import css from './Contacts.css';
import typography from '../../styles/typography.css';
import grid from '../../styles/grid.css';
import uiKit from '../../styles/uikit.css';

class Contacts extends Component {
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
                    <img src={process.env.PUBLIC_URL + contact.ico} alt={contact.name}/>
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
}

const mapStateToProps = ({contactsReducer}) => {
  return {
    data: contactsReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContactsData: async () => {
      const data = await fetchContacts();
      dispatch({
        type: FETCH_CONTACTS_DATA,
        data
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);