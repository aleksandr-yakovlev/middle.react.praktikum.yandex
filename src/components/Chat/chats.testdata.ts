import faker from 'faker';

let chatsData = [
  {
    chatId: '0',
    chatType: 0,
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/dixchen/128.jpg',
    label: 'Антон',
    username: 'Антон',
    shortmessage: 'We need to bypass the mobile HDD port!',
    timestamp: new Date('2020-05-04T16:57:31.338Z'),
  },
  {
    chatId: '1',
    chatType: 0,
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/rahmeen/128.jpg',
    label: 'Александр',
    username: 'Александр',
    shortmessage: 'We need to program the mobile IB sensor!',
    timestamp: new Date('2020-03-22T16:57:31.338Z'),
  },
  {
    chatId: '2',
    chatType: 2,
    ava: 'https://picsum.photos/id/282/48',
    label: 'value-added Configurable synthesize',
    username: 'Эдуард',
    shortmessage:
      'Use the mobile IB circuit, then you can synthesize the auxiliary driver!',
    timestamp: new Date('2020-03-22T16:57:31.338Z'),
  },
  {
    chatId: '3',
    chatType: 0,
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg',
    label: 'Никита',
    username: 'Никита',
    shortmessage:
      "I'll bypass the virtual PCI bandwidth, that should panel the CSS program!",
    timestamp: new Date('2020-03-22T16:57:31.338Z'),
  },
  {
    chatId: '4',
    chatType: 0,
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg',
    label: 'Аркадий',
    username: 'Аркадий',
    shortmessage:
      'Use the neural RAM driver, then you can bypass the online port!',
    timestamp: new Date('2020-03-22T16:57:31.339Z'),
  },
  {
    chatId: '5',
    chatType: 1,
    ava: 'https://picsum.photos/id/558/48',
    label: 'aggregate Фантастический Бетонный Стол',
    username: 'Андрей',
    shortmessage:
      'Try to input the ADP hard drive, maybe it will override the multi-byte monitor!',
    timestamp: new Date('2020-03-22T16:57:31.339Z'),
  },
  {
    chatId: '6',
    chatType: 2,
    ava: 'https://picsum.photos/id/794/48',
    label: 'темно-фиолетовый Автомобиль Solutions',
    username: 'Арина',
    shortmessage:
      'Use the multi-byte GB circuit, then you can index the 1080p interface!',
    timestamp: new Date('2020-03-22T16:57:31.339Z'),
  },
  {
    chatId: '7',
    chatType: 0,
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/nessoila/128.jpg',
    label: 'Лариса',
    username: 'Лариса',
    shortmessage:
      'Use the wireless JSON protocol, then you can copy the cross-platform capacitor!',
    timestamp: new Date('2020-03-22T16:57:31.339Z'),
  },
  {
    chatId: '8',
    chatType: 1,
    ava: 'https://picsum.photos/id/394/48',
    label: 'Borders dynamic',
    username: 'Андрей',
    shortmessage:
      'The JBOD monitor is down, program the bluetooth circuit so we can bypass the ADP feed!',
    timestamp: new Date('2020-03-22T16:57:31.340Z'),
  },
  {
    chatId: '9',
    chatType: 1,
    ava: 'https://picsum.photos/id/916/48',
    label: 'transmitting',
    username: 'Антон',
    shortmessage:
      'Try to transmit the HDD monitor, maybe it will reboot the redundant feed!',
    timestamp: new Date('2020-03-22T16:57:31.340Z'),
  },
  {
    chatId: '10',
    chatType: 0,
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/flashmurphy/128.jpg',
    label: 'Анжелика',
    username: 'Анжелика',
    shortmessage:
      "I'll navigate the mobile CSS sensor, that should firewall the PCI bus!",
    timestamp: new Date('2020-03-22T16:57:31.340Z'),
  },
  {
    chatId: '11',
    chatType: 0,
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/a_harris88/128.jpg',
    label: 'София',
    username: 'София',
    shortmessage: 'We need to hack the mobile XML panel!',
    timestamp: new Date('2020-03-22T16:57:31.340Z'),
  },
  {
    chatId: '12',
    chatType: 0,
    ava: 'https://picsum.photos/id/31/48',
    label: 'calculate Forward',
    username: 'Валентина',
    shortmessage:
      "You can't hack the driver without indexing the open-source USB system!",
    timestamp: new Date('2020-03-22T16:57:31.340Z'),
  },
  {
    chatId: '13',
    chatType: 0,
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhiardana/128.jpg',
    label: 'Валентин',
    username: 'Валентин',
    shortmessage:
      'Try to transmit the PNG card, maybe it will copy the online array!',
    timestamp: new Date('2020-03-22T16:57:31.341Z'),
  },
  {
    chatId: '14',
    chatType: 0,
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/panchajanyag/128.jpg',
    label: 'Алевтина',
    username: 'Алевтина',
    shortmessage:
      "parsing the program won't do anything, we need to input the online HTTP matrix!",
    timestamp: new Date('2020-03-22T16:57:31.341Z'),
  },
  {
    chatId: '15',
    chatType: 0,
    ava: 'https://picsum.photos/id/379/48',
    label: 'Дом monitor',
    username: 'Анжелика',
    shortmessage:
      'Use the multi-byte HDD hard drive, then you can reboot the wireless system!',
    timestamp: new Date('2020-03-22T16:57:31.341Z'),
  },
  {
    chatId: '16',
    chatType: 0,
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/puzik/128.jpg',
    label: 'Дмитрий',
    username: 'Дмитрий',
    shortmessage:
      "connecting the pixel won't do anything, we need to back up the auxiliary AGP microchip!",
    timestamp: new Date('2020-03-22T16:57:31.341Z'),
  },
  {
    chatId: '17',
    chatType: 0,
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/her_ruu/128.jpg',
    label: 'Лука',
    username: 'Лука',
    shortmessage:
      "You can't program the array without connecting the online FTP firewall!",
    timestamp: new Date('2020-03-22T16:57:31.341Z'),
  },
  {
    chatId: '18',
    chatType: 1,
    ava: 'https://picsum.photos/id/53/48',
    label: 'neutral',
    username: 'Никита',
    shortmessage:
      'Try to connect the XSS microchip, maybe it will parse the open-source panel!',
    timestamp: new Date('2020-03-22T16:57:31.341Z'),
  },
  {
    chatId: '19',
    chatType: 2,
    ava: 'https://picsum.photos/id/283/48',
    label: 'Devolved Saint Helena Pound European Unit of Account 17(E.U.A.-17)',
    username: 'Лука',
    shortmessage:
      "You can't compress the hard drive without transmitting the bluetooth JSON interface!",
    timestamp: new Date('2020-03-22T16:57:31.342Z'),
  },
  {
    chatId: '20',
    chatType: 2,
    ava: 'https://picsum.photos/id/484/48',
    label: 'synthesize',
    username: 'Константин',
    shortmessage:
      "overriding the application won't do anything, we need to transmit the virtual HTTP panel!",
    timestamp: new Date('2020-03-22T16:57:31.342Z'),
  },
];

interface IMessage {
  ava: string;
  username: string;
  message: string;
  timestamp: Date;
}

let getMessages = (count: number) => {
  let aChats: IMessage[] = [];
  for (let index = 0; index < count; index++) {
    aChats.push({
      ava: `https://picsum.photos/id/${faker.random.number(1000)}/48`,
      username: faker.name.firstName(),
      message: faker.hacker.phrase(),
      timestamp: faker.date.past(),
    });
  }
  return aChats;
};

export { chatsData, getMessages };
