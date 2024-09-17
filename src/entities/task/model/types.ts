import { Todo } from '@/shared/api/todos/model';

export interface TaskState {
  TaskList: Todo[];
  Task?: Todo;
}
