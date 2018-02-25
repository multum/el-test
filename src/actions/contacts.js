import {fetchContacts} from "../api/contacts";
import {FETCH_CONTACTS_DATA} from "../constans/contacts";

export const getContactsData = () => async dispatch => {
  const data = await fetchContacts();
  dispatch({
    type: FETCH_CONTACTS_DATA,
    data
  });
};