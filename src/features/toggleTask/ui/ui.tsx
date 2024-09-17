import { useUpdateTodoMutation } from '@/entities/task/api/task.api';
import { Toggle } from '@/shared/ui';

export function ToggleTask({
  id,
  completed,
}: {
  id: number;
  completed: boolean;
}) {
  const [updateTodo] = useUpdateTodoMutation();
  return (
    <div>
      <Toggle
        children={{ completed }}
        onClick={() => updateTodo({ id, completed: !completed })}
      />
    </div>
  );
}
