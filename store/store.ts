import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { searchReducer } from './search';

export const middlewares = [ReduxThunk];
export const store = createStore(searchReducer, {}, applyMiddleware(...middlewares));

