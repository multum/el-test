import React, {Component} from 'react';

import CollapsibleElement from '../CollapsibleElement/index';

import grid from '../../styles/grid.css';
import typography from '../../styles/typography.css';

export default class Readme extends Component {

  componentDidMount() {
    this.props.getReadmeData();
  }

  render() {
    return (
      <div className={grid.smContainer}>
        <h2 className={typography.h2}>Ameen Merchant App</h2>
        {this.props.data && this.props.data.map((elementProps, index) => {
          const first = index === 0;
          return <CollapsibleElement active={first} key={index} {...elementProps}/>;
        })}
      </div>
    );
  }
}