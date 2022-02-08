import { createStore } from 'redux';
import { searchReducer } from '../store/search';

export const findByTestAttribute = (wrapper, attribute) => wrapper.find(`[data-test='${attribute}']`);

export const storeFactory = (initialState) => createStore(searchReducer, initialState);
