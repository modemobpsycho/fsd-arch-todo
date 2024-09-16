import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routing/appRouter';
import { appStore } from './store/appStore';

import '@/shared/base.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={appStore}>
      <RouterProvider router={appRouter()} />
    </ReduxProvider>
  </React.StrictMode>
);
