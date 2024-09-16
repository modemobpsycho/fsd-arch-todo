import { MainLayout } from '@/shared/ui/main-layout';
import { createBrowserRouter } from 'react-router-dom';

export const appRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <div>Home</div>,
        },
        {
          path: ':id',
          element: <div>About</div>,
        },
      ],
    },
  ]);
