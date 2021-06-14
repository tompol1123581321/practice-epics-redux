import { createSlice } from '@reduxjs/toolkit';
import { News, Todo } from './types';

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [] as News[]
  },
  reducers: {
    addNews: (state, action) => {
      state.news = [...state.news, action.payload];
    },
    deleteNews: (state, action) => {
      state.news = state.news.filter(s => s.id !== action.payload.id);
    },
    confirmNews: (state, action) => {
      console.log('newsAdded');
    }
  }
});

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [] as Todo[]
  },
  reducers: {
    fetchTodo: (state, action) => {
      console.log(`fetching`);
    },
    saveTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    errorFetch: (state, action) => {
      console.log('there is an error');
    }
  }
});
// Action creators are generated for each case reducer function
export const { addNews, deleteNews, confirmNews } = newsSlice.actions;
export const { fetchTodo, saveTodo, errorFetch } = todoSlice.actions;

export const newSliceReducer = newsSlice.reducer;
export const todoReducer = todoSlice.reducer;
