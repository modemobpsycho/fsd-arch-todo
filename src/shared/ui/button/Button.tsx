import { Button as AntdButton } from 'antd';

import * as classes from './Button.module.scss';
export function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: { title: string };
}) {
  return (
    <AntdButton className={classes.button} onClick={onClick}>
      {children.title}
    </AntdButton>
  );
}
