import { Todo } from '@/shared/api/todos/model';
import { RemoveTask, ToggleTask } from '@/features';

import * as classes from './TaskCard.module.scss';

export function TaskCard({ task }: { task: Todo }) {
  return (
    <div className={classes.card}>
      <div
        className={`${classes.card__content} ${
          task.completed ? `${classes.card__content_completed}` : ''
        }`}
      >
        {task.title}
      </div>
      <div className={classes.card__actions}>
        <ToggleTask id={task.id} completed={task.completed} />
        <RemoveTask id={task.id} />
      </div>
    </div>
  );
}
