import { useGetTodosQuery } from '@/entities/task/api/task.api';
import { TaskForm } from '@/widgets';
import { TaskList } from '@/widgets/taskList';

export const TodoListPage = () => {
  const { data: tasks } = useGetTodosQuery();

  return (
    <div>
      <TaskForm />
      <TaskList taskList={tasks || []} />
    </div>
  );
};
