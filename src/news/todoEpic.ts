import axios, { AxiosResponse } from 'axios';
import { Epic } from 'redux-observable';
import { from } from 'rxjs';
import { filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { fetchTodo, saveTodo } from './newsSlice';
import { Todo } from './types';

const fetchDataCall = () =>
  axios
    .get(`https://jsonplaceholder.typicode.com/todos/${Math.round(Math.random() * 200)}`)
    .catch(e => {
      console.log(e);
    });

export const getTodoEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(fetchTodo.match),
    switchMap(action =>
      from(fetchDataCall()).pipe(
        map(response => (response ? saveTodo(response.data) : null)),
        filter(<T>(action: T): action is NonNullable<T> => !!action)
      )
    )
  );
