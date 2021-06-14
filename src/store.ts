import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { pingEpic } from './news/newsEpic';
import { newSliceReducer, todoReducer } from './news/newsSlice';
import { getTodoEpic } from './news/todoEpic';

const rootReducer = combineReducers({ news: newSliceReducer, todos: todoReducer });
const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(pingEpic, getTodoEpic);

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [epicMiddleware]
});

epicMiddleware.run(rootEpic);
