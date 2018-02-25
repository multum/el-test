import {fetchJSON} from "../helpers/common";

/**
 * Fetch contacts list
 *
 * @returns {promise}
 */
export const fetchContacts = async () => {
  const json = await fetchJSON('data/contacts.json');
  return json.data;
};