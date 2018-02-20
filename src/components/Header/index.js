import React, {Component} from 'react';
import {connect} from 'react-redux';
import Link from '../Link/index';

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
        <div className={grid.container}>
          <div className={css.justify}>
            <div className={css.user}>
              <div className={css.logo}>AV</div>
              <div className={css.name}>Andrey Vereshchak</div>
            </div>
            <ul className={css.navList}>
              {links.map(link => {
                return <li key={link.path}><Link activeClassName={css.activeLink} to={link.path}>{link.text}</Link>
                </li>;
              })}
            </ul>
          </div>
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