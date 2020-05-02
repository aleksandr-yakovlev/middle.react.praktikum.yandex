import React from 'react';

import { MessageList } from 'components/Main/MessageList';

export const ScreensChatMain = (props: { chatId: string | undefined }) => (
  <MessageList chatId={props.chatId} />
);
