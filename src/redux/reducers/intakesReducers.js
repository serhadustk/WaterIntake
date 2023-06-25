// reducers/userReducer.js

import {
  FETCH_INTAKES,
  INTAKES_PENDING,
  INTAKES_REJECT,
} from '../types/intakesTypes';

const initialState = {
  intakes: [],
  pending: false,
};

const intakesReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INTAKES:
      return {
        ...state,
        intakes: action.payload,
        pending: false,
      };
    case INTAKES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case INTAKES_REJECT:
      return {
        ...state,
        pending: false,
        intakes: [],
      };
    default:
      return state;
  }
};

export default intakesReducers;
