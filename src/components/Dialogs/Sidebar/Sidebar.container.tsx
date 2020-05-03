import * as React from 'react';
import faker from 'faker';

import { IChat } from 'types';
import { OwnProps, StateProps } from './types';

import { Sidebar } from './Sidebar';

//чаты уже отсортированы на стороне сервера
const getChats = (chatCount: number = 50): Promise<IChat[]> => {
  return new Promise((resolve, reject) => {
    let aChats: IChat[] = [];
    let id = 0;
    for (let index = 0; index < chatCount; index++) {
      //расчетный id нужен чтобы вычислить дату на тестовых данных
      id += ++index * faker.random.number(100);
      let chat: IChat = {
        chatId: id.toString(),
        isPinned: false,
      };
      aChats.push(chat);
    }
    resolve(aChats);
  });
};

class SidebarContainer extends React.Component<OwnProps, StateProps> {
  constructor(props: OwnProps) {
    super(props);

    this.state = { aChats: [] };
  }

  componentDidMount() {
    getChats().then((response) => this.setState({ aChats: response }));
  }

  public render() {
    const { handleClickCreator, activeChat } = { ...this.props };
    return (
      <Sidebar
        aChats={this.state.aChats}
        handleClickCreator={handleClickCreator}
        activeChat={activeChat}
      />
    );
  }
}

export { SidebarContainer as Sidebar };
