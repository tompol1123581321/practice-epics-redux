import { Epic } from 'redux-observable';
import { filter, mapTo } from 'rxjs/operators';
import { addNews, confirmNews } from './newsSlice';

export const pingEpic: Epic = (action$, state$) =>
  action$.pipe(filter(addNews.match), mapTo(confirmNews('')));
