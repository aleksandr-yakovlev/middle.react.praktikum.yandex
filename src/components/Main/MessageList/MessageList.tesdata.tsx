import { StateProps } from '../Message/types';
import faker from 'faker/locale/ru';

let getTestData = (): StateProps => {
  let ava: string;

  const username: string = faker.name.firstName();

  ava = `https://picsum.photos/id/${faker.random.number(1000)}/48`;

  let timestamp = new Date();
  const itemTestData: StateProps = {
    ava: ava,
    username: username,
    message: faker.hacker.phrase(),
    timestamp: timestamp,
  };

  return itemTestData;
};

export default getTestData;
