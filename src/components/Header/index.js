import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import css from './Header.css';
import grid from '../../styles/grid.css';

const links = [
  {
    path: '/',
    text: 'How it works'
  },
  {
    path: '/calendar',
    text: 'Calendar'
  },
  {
    path: '/portfolio',
    text: 'Portfolio'
  },
  {
    path: '/contact',
    text: 'Contact us'
  }
];

class Header extends Component {
  render() {
    return (
      <div className={css.wrapper}>
        <div className={`${grid.container} ${css.container}`}>
          <div className={css.user}>
            <div className={css.logo}>AV</div>
            <div className={css.name}>Andrey Vereshchak</div>
          </div>
          <ul className={css.navList}>
            {links.map(link => {
              return <li key={link.path}><NavLink exact activeClassName={css.activeLink} to={link.path}>{link.text}</NavLink></li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};
export default connect(mapStateToProps)(Header);