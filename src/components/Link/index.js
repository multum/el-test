import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import isExternal from 'is-url-external';

/**
 * Link that also works for external URL's
 */
export default class LinkDuo extends Component {
  render() {
    return isExternal(this.props.to) ?
      <a
        href={this.props.to}
        target='_blank'
        {...this.props}
      >{this.props.children}</a>
      :
      <NavLink exact {...this.props} >{this.props.children}</NavLink>;
  }
}