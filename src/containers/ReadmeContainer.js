import Readme from '../components/Readme/index';
import {connect} from 'react-redux';

import {getReadmeData} from '../actions/readme';

const mapStateToProps = ({readmeReducer}) => {
  return {
    data: readmeReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getReadmeData: () => dispatch(getReadmeData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Readme);
