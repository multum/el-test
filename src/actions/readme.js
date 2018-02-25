import {fetchReadme} from "../api/readme";
import {FETCH_README_DATA} from "../constans/readme";

export const getReadmeData = () => async dispatch => {
  const data = await fetchReadme();
  dispatch({
    type: FETCH_README_DATA,
    data
  });
};