import React, {Component} from 'react';
import {connect} from 'react-redux';

import CollapsibleElement from '../CollapsibleElement/index';

import grid from '../../styles/grid.css';
import typography from '../../styles/typography.css';

import {fetchReadme} from "../../api/readme";
import {FETCH_README_DATA} from "../../constans/readme";

class Readme extends Component {

  async componentDidMount() {
    this.props.getReadmeData();
  }

  render() {
    console.log(this.props.data);
    return (
      <div className={grid.container}>
        <h2 className={typography.h2}>Ameen Merchant App</h2>
        {this.props.data && this.props.data.map((elementProps, index) => <CollapsibleElement active={!index}
                                                                                             key={index} {...elementProps}/>)}
      </div>
    );
  }
}

const mapStateToProps = ({readmeReducer}) => {
    return {
      data: readmeReducer.data
    };
  }
;

const mapDispatchToProps = (dispatch) => {
  return {
    getReadmeData: async () => {
      const data = await fetchReadme();
      dispatch({
        type: FETCH_README_DATA,
        data
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Readme);
