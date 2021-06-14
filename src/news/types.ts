export type News = {
  id: number;
  head: string;
  body: string;
  date?: string;
};

export type Todo = { userId: number; id: number; title: string; completed: boolean };

export type State = {
  news: { news: News[] };
  todos: { todos: any[] };
};
