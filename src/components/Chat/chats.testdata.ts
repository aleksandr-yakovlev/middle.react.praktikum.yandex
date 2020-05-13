enum ETypeItem {
  personal = 0,
  group,
  channel,
}

interface IChatItem {
  chatId: string;
  chatType: ETypeItem;
  ava: string;
  label: string;
  username: string;
  shortmessage: string;
  timestamp: Date;
}

let chatsData: Record<string, IChatItem[]> = {
  test: [
    {
      chatId: '021b797c-72f9-4e7b-8cc3-b57fb2d1eedb',
      chatType: 0,
      ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/dixchen/128.jpg',
      label: 'Антон',
      username: 'Антон',
      shortmessage: 'We need to bypass the mobile HDD port!',
      timestamp: new Date('2020-05-04T16:57:31.338Z'),
    },
    {
      chatId: '24e0b6ed-9046-483a-b35d-7ef66cc3c1b8',
      chatType: 0,
      ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg',
      label: 'Никита',
      username: 'Никита',
      shortmessage:
        "I'll bypass the virtual PCI bandwidth, that should panel the CSS program!",
      timestamp: new Date('2020-03-22T16:57:31.338Z'),
    },
  ],
  default: [
    {
      chatId: 'aed5afa3-df62-4f8f-9320-cc552a781f6a',
      chatType: 2,
      ava: 'https://picsum.photos/id/282/48',
      label: 'value-added Configurable synthesize',
      username: 'Эдуард',
      shortmessage:
        'Use the mobile IB circuit, then you can synthesize the auxiliary driver!',
      timestamp: new Date('2020-03-22T16:57:31.338Z'),
    },
    {
      chatId: '8a906a89-3e0b-4836-82bf-0ace982faa96',
      chatType: 1,
      ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/rahmeen/128.jpg',
      label: 'Александр',
      username: 'Александр',
      shortmessage: 'We need to program the mobile IB sensor!',
      timestamp: new Date('2020-03-22T16:57:31.338Z'),
    },
  ],
};

interface IMessage {
  messageId: string;
  authorId: string;
  text: string;
  timestamp: Date;
}

interface IChatMessageData {
  users: Record<string, { name: string; ava: string }>;
  messages: IMessage[];
}

const messagesData: Record<string, IChatMessageData> = {
  '24e0b6ed-9046-483a-b35d-7ef66cc3c1b8': {
    users: {
      test: {
        name: 'Jack Johnson',
        ava: 'https://picsum.photos/id/252/48',
      },
      'shrek@ya.ru': {
        name: 'Shrek',
        ava: 'https://picsum.photos/id/232/48',
      },
    },
    messages: [
      {
        messageId: '4f82c4ce-57a6-4619-84b8-add5be27d207',
        authorId: 'test',
        text: 'Hey, We here!',
        timestamp: new Date('2020-01-04T13:22:03.338Z'),
        // new Date('2020-05-04T16:57:31')
      },
      {
        messageId: '4fd57ff3-86c9-4c55-9303-e2d235efdaf7',
        authorId: 'shrek@ya.ru',
        text:
          'We at home We at home  We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home',
        timestamp: new Date('2020-02-02T09:04:33.338Z'),
      },
      {
        messageId: '82529ed0-9684-4885-8215-7c4b209509d2',
        authorId: 'shrek@ya.ru',
        text: 'I am at home',
        timestamp: new Date('2020-02-02T09:30:33.338Z'),
      },
      {
        messageId: 'f744c554-dfb8-44c4-8cb5-37eef05ad743',
        authorId: 'test',
        text: 'Welcome!',
        timestamp: new Date('2020-02-02T10:00:50.338Z'),
      },
      {
        messageId: 'da36f52f-4ba1-44bf-907f-df60e76e6bef',
        authorId: 'test',
        text: 'Welcome!',
        timestamp: new Date('2020-02-02T12:02:50.338Z'),
      },
    ],
  },
  '021b797c-72f9-4e7b-8cc3-b57fb2d1eedb': {
    users: {
      test: {
        name: 'Jack Johnson',
        ava: 'https://picsum.photos/id/252/48',
      },
      'shrek@ya.ru': {
        name: 'Shrek',
        ava: 'https://picsum.photos/id/232/48',
      },
    },
    messages: [
      {
        messageId: '4f82c4ce-57a6-4619-84b8-add5be27d207',
        authorId: 'shrek@ya.ru',
        text: 'Hey, We here!',
        timestamp: new Date('2020-01-04T13:22:03.338Z'),
      },
      {
        messageId: '4fd57ff3-86c9-4c55-9303-e2d235efdaf7',
        authorId: 'shrek@ya.ru',
        text:
          'I am at home I am at home  I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home',
        timestamp: new Date('2020-02-02T09:04:33.338Z'),
      },
      {
        messageId: '82529ed0-9684-4885-8215-7c4b209509d2',
        authorId: 'test',
        text: 'We at home',
        timestamp: new Date('2020-02-02T09:30:33.338Z'),
      },
      {
        messageId: 'f744c554-dfb8-44c4-8cb5-37eef05ad743',
        authorId: 'test',
        text: 'Welcome!',
        timestamp: new Date('2020-02-02T10:00:50.338Z'),
      },
      {
        messageId: 'da36f52f-4ba1-44bf-907f-df60e76e6bef',
        authorId: 'test',
        text: 'Welcome!',
        timestamp: new Date('2020-02-02T12:02:50.338Z'),
      },
    ],
  },
  '8a906a89-3e0b-4836-82bf-0ace982faa96': {
    users: {
      default: {
        name: 'Jack Johnson',
        ava: 'https://picsum.photos/id/252/48',
      },
      'shrek@ya.ru': {
        name: 'Shrek',
        ava: 'https://picsum.photos/id/232/48',
      },
    },
    messages: [
      {
        messageId: '4f82c4ce-57a6-4619-84b8-add5be27d207',
        authorId: 'default',
        text: 'Hey, We here!',
        timestamp: new Date('2020-01-04T13:22:03.338Z'),
        // new Date('2020-05-04T16:57:31')
      },
      {
        messageId: '4fd57ff3-86c9-4c55-9303-e2d235efdaf7',
        authorId: 'shrek@ya.ru',
        text:
          'We at home We at home  We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home',
        timestamp: new Date('2020-02-02T09:04:33.338Z'),
      },
      {
        messageId: '82529ed0-9684-4885-8215-7c4b209509d2',
        authorId: 'shrek@ya.ru',
        text: 'We at home',
        timestamp: new Date('2020-02-02T09:30:33.338Z'),
      },
      {
        messageId: 'f744c554-dfb8-44c4-8cb5-37eef05ad743',
        authorId: 'default',
        text: 'Welcome!',
        timestamp: new Date('2020-02-02T10:00:50.338Z'),
      },
      {
        messageId: 'da36f52f-4ba1-44bf-907f-df60e76e6bef',
        authorId: 'default',
        text: 'Welcome!',
        timestamp: new Date('2020-02-02T12:02:50.338Z'),
      },
    ],
  },
  'aed5afa3-df62-4f8f-9320-cc552a781f6a': {
    users: {
      default: {
        name: 'Jack Johnson',
        ava: 'https://picsum.photos/id/252/48',
      },
      'shrek@ya.ru': {
        name: 'Shrek',
        ava: 'https://picsum.photos/id/232/48',
      },
    },
    messages: [
      {
        messageId: '4f82c4ce-57a6-4619-84b8-add5be27d207',
        authorId: 'default',
        text: 'Hey, We here!',
        timestamp: new Date('2020-01-04T13:22:03.338Z'),
        // new Date('2020-05-04T16:57:31')
      },
      {
        messageId: '4fd57ff3-86c9-4c55-9303-e2d235efdaf7',
        authorId: 'shrek@ya.ru',
        text:
          'We at home We at home  We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home',
        timestamp: new Date('2020-02-02T09:04:33.338Z'),
      },
      {
        messageId: '82529ed0-9684-4885-8215-7c4b209509d2',
        authorId: 'shrek@ya.ru',
        text: 'We at home',
        timestamp: new Date('2020-02-02T09:30:33.338Z'),
      },
      {
        messageId: 'f744c554-dfb8-44c4-8cb5-37eef05ad743',
        authorId: 'default',
        text: 'Welcome!',
        timestamp: new Date('2020-02-02T10:00:50.338Z'),
      },
      {
        messageId: 'da36f52f-4ba1-44bf-907f-df60e76e6bef',
        authorId: 'default',
        text: 'Welcome!',
        timestamp: new Date('2020-02-02T12:02:50.338Z'),
      },
    ],
  },
};

const getChats = (userId: string) => chatsData[userId] || chatsData.default;

const getChatData = (chatId: string) => messagesData[chatId];

const checkChatPermissions = (userId: string, chatId: string) => {
  return !!(messagesData[chatId] || {}).users[userId];
};

const sendChatMessage = (chatId: string, message: IMessage) =>
  messagesData[chatId].messages.push(message);

export { getChatData, sendChatMessage, getChats, checkChatPermissions };
