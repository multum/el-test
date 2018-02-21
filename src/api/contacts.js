import contactsData from '../data/contacts.json';

/**
 * Fetch posts
 *
 * @description pseudo fetch for test task
 * @returns {promise}
 */
export const fetchContacts = async () => {
  return new Promise(resolve => 'data' in contactsData && resolve(contactsData.data));
};