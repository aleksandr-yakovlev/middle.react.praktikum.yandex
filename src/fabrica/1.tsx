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
