import { Input } from '@/shared/ui';
import * as classes from './TaskForm.module.scss';
import { AddTask } from '@/features';

export function TaskForm() {
  return (
    <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
      <Input placeholder={'What needs to be done?'} />
      <AddTask />
    </form>
  );
}
