import { useDeleteTodoMutation } from '@/entities/task/api/task.api';
import { Button } from '@/shared/ui';

export function RemoveTask({ id }: { id: number }) {
  const [deleteTodo] = useDeleteTodoMutation();
  return (
    <Button children={{ title: 'Remove' }} onClick={() => deleteTodo(id)} />
  );
}
