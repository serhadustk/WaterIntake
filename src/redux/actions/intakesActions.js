import {INTAKES_URL} from '../../service/Urls';
import {getRequest} from '../../service/Verbs';
import {
  FETCH_INTAKES,
  INTAKES_PENDING,
  INTAKES_REJECT,
} from '../types/intakesTypes';

export const getIntakes = () => {
  return async dispatch => {
    try {
      dispatch({type: INTAKES_PENDING});
      const response = await getRequest(INTAKES_URL);
      const {data} = response;
      dispatch({
        type: FETCH_INTAKES,
        payload: data,
      });
      console.log('data selim', data);
    } catch (error) {
      dispatch({type: INTAKES_REJECT});
    }
  };
};
