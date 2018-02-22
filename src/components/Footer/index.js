import React from 'react';

import Link from '../Link/index';

import grid from '../../styles/grid.css';
import css from './Footer.css';

const Footer = () => {

  const links = [
    {path: '/', text: 'Terms'},
    {path: '/', text: 'Privacy'},
    {path: '/', text: 'Security'},
    {path: '/', text: 'Status'},
    {path: '/', text: 'Help'},
    {path: '/contacts', text: 'Contact'}
  ];

  return (
    <div className={css.wrapper}>
      <div className={grid.container}>
        <div className={css.justify}>
          <div className={css.copyright}>© 2017 Something.</div>
          <ul className={css.navList}>
            {links.map((link, index) => {
              return <li key={index}>
                <Link to={link.path}>{link.text}</Link>
              </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;