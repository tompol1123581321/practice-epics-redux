import { createSlice } from '@reduxjs/toolkit';
import { News } from './types';

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
    }
  }
});

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    fetchTodo: (state, action) => {
      console.log(`fetching ${action.payload}`);
    },
    saveTodo: (state, action) => {
      console.log(`saving the ${action.payload}`);
    }
  }
});
// Action creators are generated for each case reducer function
export const { addNews, deleteNews } = newsSlice.actions;
export const { fetchTodo, saveTodo } = todoSlice.actions;

export const newSliceReducer = newsSlice.reducer;
export const todoReducer = todoSlice.reducer;
