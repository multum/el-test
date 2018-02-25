import Contacts from '../components/Contacts/index';
import {connect} from 'react-redux';

import {getContactsData} from "../actions/contacts";

const mapStateToProps = ({contactsReducer}) => {
  return {
    data: contactsReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContactsData: () => dispatch(getContactsData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);