// actions.js
export const SEARCH_CEP_REQUEST = 'SEARCH_CEP_REQUEST';
export const SEARCH_CEP_SUCCESS = 'SEARCH_CEP_SUCCESS';
export const SEARCH_CEP_FAILURE = 'SEARCH_CEP_FAILURE';

export const searchCepRequest = () => ({
  type: SEARCH_CEP_REQUEST
});

export const searchCepSuccess = (cepData) => ({
  type: SEARCH_CEP_SUCCESS,
  payload: cepData
});

export const searchCepFailure = () => ({
  type: SEARCH_CEP_FAILURE
});