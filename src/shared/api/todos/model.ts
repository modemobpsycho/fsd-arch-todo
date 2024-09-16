// {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
// },

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type QueryParams = {
  completed?: boolean;
};
