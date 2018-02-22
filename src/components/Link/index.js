import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import isExternal from 'is-url-external';
import omit from 'lodash/omit';

/**
 * Link that also works for external URL's
 */
export default class Link extends Component {

  isRoute = () => !isExternal(this.props.to);

  render() {
    const propsForExternal = omit(this.props, [
      'activeClassName',
      'to'
    ]);

    return this.isRoute() ?
      <NavLink exact {...this.props} >{this.props.children}</NavLink>
      :
      <a
        href={this.props.to}
        target='_blank'
        {...propsForExternal}
      >
        {this.props.children}
      </a>;
  }
}