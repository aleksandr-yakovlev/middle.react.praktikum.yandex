import * as React from 'react';
import faker from 'faker';

import { IChat } from 'types';

import { Sidebar } from './Sidebar';

//чаты уже отсортированы на стороне сервера
const getChats = (chatCount: number = 50): Promise<IChat[]> => {
  return new Promise((resolve, reject) => {
    let aChats: IChat[] = [];
    let id = 0;
    for (let index = 0; index < chatCount; index++) {
      //расчетный id нужен чтобы вычислить дату на тестовых данных
      id += (index + 1) * faker.random.number(100);
      let chat: IChat = {
        chatId: id.toString(),
        isPinned: false,
      };
      aChats.push(chat);
    }
    resolve(aChats);
  });
};

export interface ISidebarContainerProps {}

export interface ISidebarState {
  chatList: IChat[];
}

export default class SidebarContainer extends React.Component<
  ISidebarContainerProps,
  ISidebarState
> {
  constructor(props: ISidebarContainerProps) {
    super(props);

    this.state = { chatList: [] };
  }

  componentDidMount() {
    getChats().then((response) => this.setState({ chatList: response }));
  }

  public render() {
    return <Sidebar chatList={this.state.chatList} {...this.props} />;
  }
}
