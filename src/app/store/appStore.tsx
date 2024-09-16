import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { httpClient } from '@/shared/api/http-client';
import { taskReducer } from '@/entities/task';

const reducers = combineReducers({
  task: taskReducer,
  [httpClient.reducerPath]: httpClient.reducer,
});

export const appStore = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(httpClient.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
