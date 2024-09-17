import { httpClient } from '@/shared/api/http-client';
import { Todo } from '@/shared/api/todos/model';

export const taskApi = httpClient.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<Todo[], void>({
      query: () => ({
        url: 'todos',
        method: 'GET',
      }),
    }),
    getTodoById: build.query<Todo, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'GET',
      }),
    }),
    createTodo: build.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: 'todos',
        method: 'POST',
        body,
      }),
    }),
    updateTodo: build.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: `todos/${body.id}`,
        method: 'PATCH',
        body,
      }),
    }),
    deleteTodo: build.mutation<Todo, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = taskApi;
