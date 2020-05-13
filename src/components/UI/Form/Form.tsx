import React, { FC, Children, FocusEvent, ReactElement } from 'react';

import styles from './Form.module.scss';

export interface IFormProps {
  children: ReactElement<HTMLFormElement>[];
  errors: Record<string, string | null | boolean>;
  onBlur?: (e: FocusEvent<HTMLFormElement>) => void;
}

export const Form: FC<IFormProps & React.HTMLProps<HTMLFormElement>> = (
  props,
) => {
  const { children, errors, onBlur, ...formProps } = props;
  return (
    <form className={styles.loginForm} {...formProps}>
      {Children.map(children, (child: ReactElement<HTMLFormElement>) => (
        <>
          {React.cloneElement(child as ReactElement<HTMLFormElement>, {
            onBlur: onBlur,
          })}
          {errors[child?.props.name] && (
            <span className={styles.errorText}>
              {errors[child?.props.name]}
            </span>
          )}
        </>
      ))}
    </form>
  );
};
