import readmeData from '../data/home.json';

/**
 * Fetch posts
 *
 * @description pseudo fetch for test task
 * @returns {promise}
 */
console.log(readmeData.data);
export const fetchReadme = async () => {
  return new Promise(resolve => 'data' in readmeData && resolve(readmeData.data));
};