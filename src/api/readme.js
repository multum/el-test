import readmeData from '../data/readme.json';

/**
 * Fetch posts
 *
 * @description pseudo fetch for test task
 * @returns {promise}
 */
export const fetchReadme = async () => {
  return new Promise(resolve => 'data' in readmeData && resolve(readmeData.data));
};