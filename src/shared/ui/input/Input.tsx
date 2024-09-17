import * as classes from './Input.module.scss';

export function Input({ placeholder }: { placeholder?: string }) {
  return <input className={classes.input} placeholder={placeholder} />;
}
