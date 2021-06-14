import { News, State } from './types';

export const getNews = (state: State): News[] => state.news.news;
