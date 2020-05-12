import React, { FC, KeyboardEvent, ChangeEvent, useRef } from 'react';

import styles from './MessageForm.module.scss';

export interface IMessageProps {
  value: string;
  handleKeyPress: (
    ref: React.RefObject<HTMLTextAreaElement>,
  ) => (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  onChange: (
    ref: React.RefObject<HTMLTextAreaElement>,
  ) => (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const MessageForm: FC<IMessageProps> = (props) => {
  const { handleKeyPress, onChange, value } = props;
  let textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <textarea
      rows={1}
      value={value}
      name="messagearea"
      onChange={onChange(textAreaRef)}
      onKeyDown={handleKeyPress(textAreaRef)}
      className={styles.messageform}
      ref={textAreaRef}
    ></textarea>
  );
};
