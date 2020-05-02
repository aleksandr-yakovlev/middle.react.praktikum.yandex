import React from 'react';

import { Sidebar } from 'components/Dialogs/Sidebar';

export const ScreensChatSidebar = (props: {
  handleClickCreator: any;
  activeChat: string | undefined;
}) => <Sidebar {...props} />;
