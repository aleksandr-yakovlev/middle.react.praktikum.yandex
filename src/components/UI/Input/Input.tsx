import React, { FC, HTMLProps } from 'react';

export interface ILabelProps {
  label: string;
}

export const Input: FC<ILabelProps & HTMLProps<HTMLInputElement>> = (props) => {
  const { label, ...inputProps } = props;
  return (
    <label>
      <b>{label}</b>
      <input type="text" {...inputProps} />
    </label>
  );
};
