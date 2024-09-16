import { Todo } from '@/shared/api/todos/model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskState } from './types';

const initialState: TaskState = {
  TaskList: [],
  Task: undefined,
  isLoading: false,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTaskList(state, action: PayloadAction<Todo[]>) {
      state.TaskList = action.payload;
    },
    setTask(state, action: PayloadAction<Todo>) {
      state.Task = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { actions, reducer } = taskSlice;
