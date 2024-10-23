// reducers.js
import { SEARCH_CEP_REQUEST, SEARCH_CEP_SUCCESS, SEARCH_CEP_FAILURE } from './actions';

const initialState = {
  cep: {},
  loading: false,
  error: false
};

const cepReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CEP_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case SEARCH_CEP_SUCCESS:
      return {
        ...state,
        cep: action.payload,
        loading: false,
        error: false
      };
    case SEARCH_CEP_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default cepReducer;