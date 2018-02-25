import {fetchJSON} from "../helpers/common";

/**
 * Fetch posts
 *
 * @returns {promise}
 */
export const fetchReadme = async () => {
  const json = await fetchJSON('data/readme.json');
  return json.data;
};