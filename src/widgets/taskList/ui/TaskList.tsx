import { Todo } from '@/shared/api/todos/model';
import { TaskCard } from './TaskCard/ui';

import * as classes from './TaskList.module.scss';

export function TaskList({ taskList }: { taskList: Todo[] }) {
  return (
    <div className={classes.taskList}>
      <ul className={classes.taskList__list}>
        {taskList.map((task) => (
          <li key={task.id}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
