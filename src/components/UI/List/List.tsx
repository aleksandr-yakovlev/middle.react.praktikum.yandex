import React, { FC, HTMLProps } from 'react';

interface IList extends HTMLProps<HTMLDivElement> {}

export const List: FC<IList> = (props) => {
  const { children, ...divProps } = props;
  return <div {...divProps}>{children}</div>;
};
