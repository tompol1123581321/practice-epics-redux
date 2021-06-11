import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newSliceReducer, todoReducer } from './news/newsSlice';

const rootReducer = combineReducers({ 1: newSliceReducer, 2: todoReducer });

export default configureStore({
  reducer: rootReducer
});
