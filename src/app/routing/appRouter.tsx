import { createBrowserRouter } from 'react-router-dom';
import { paths } from '@/shared/constants/paths';
import { MainLayout } from '@/shared/ui/main-layout';
import { TodoDetailsPage, TodoListPage } from '@/pages';

export const appRouter = () =>
  createBrowserRouter([
    {
      path: paths.ROOT,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <TodoListPage />,
        },
        {
          path: paths.TODO_DETAILS,
          element: <TodoDetailsPage />,
        },
      ],
    },
  ]);
