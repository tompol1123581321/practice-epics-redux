import { News, State } from './types';

export const getNews = (state: State): News[] => state[1].news;
