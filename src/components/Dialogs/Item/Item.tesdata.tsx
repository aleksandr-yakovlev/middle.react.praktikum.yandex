import { ETypeItem, IItemProps } from './Item';
import faker from 'faker/locale/ru';

let createTestData = (): IItemProps => {
  let ava: string;
  let label: string;

  let aTypeItem: ETypeItem[] = Object.keys(ETypeItem).map(
    (e) => ETypeItem[e as keyof typeof ETypeItem],
  );

  //увеличиваем вероятность выпадения людей
  aTypeItem.push(...Array(aTypeItem.length).fill(ETypeItem.personal));

  const itemType: ETypeItem = faker.random.arrayElement(aTypeItem);
  const username: string = faker.name.firstName();

  switch (itemType) {
    case ETypeItem.personal:
      ava = faker.image.avatar();
      label = username;
      break;
    default:
      ava = `https://picsum.photos/id/${faker.random.number(1000)}/48`;
      label = faker.random.words();
      break;
  }

  const itemTestData: IItemProps = {
    type: itemType,
    ava: ava,
    label: label,
    username: username,
    shortmessage: faker.hacker.phrase(),
    timestamp: faker.date.past(),
  };

  return itemTestData;
};

export default createTestData;
