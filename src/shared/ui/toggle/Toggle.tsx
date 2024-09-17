import { Button } from 'antd';

import * as classes from './Toggle.module.scss';

export function Toggle({
  onClick,
  children,
}: {
  onClick: () => void;
  children: { completed: boolean };
}) {
  return (
    <Button
      className={`${classes.toggle} ${
        children.completed ? classes.toggle_completed : ''
      }`}
      onClick={onClick}
    >
      {children.completed ? 'Completed' : 'Not completed'}
    </Button>
  );
}
