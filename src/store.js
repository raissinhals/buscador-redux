// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cepReducer from './reducers';

const store = createStore(cepReducer, applyMiddleware(thunk));

export default store;