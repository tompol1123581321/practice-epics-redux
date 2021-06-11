export type News = {
  id: number;
  head: string;
  body: string;
  date?: string;
};

export type State = {
  1: { news: News[] };
  2: { todos: any[] };
};
