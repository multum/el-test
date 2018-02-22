import React from 'react';
import {NavLink} from 'react-router-dom';
import isExternal from 'is-url-external';
import omit from 'lodash/omit';

/**
 * Link that also works for external URL's
 */
const Link = props => {
  const {to, children} = props;

  const isRoute = () => !isExternal(to);

  const propsForExternal = omit(props, [
    'activeClassName',
    'to'
  ]);

  if (isRoute()) {
    return <NavLink exact {...props} >{children}</NavLink>;
  } else {
    return <a href={to} target='_blank' {...propsForExternal}>{children}</a>;
  }
};

export default Link;