import { ETypeItem, IItemProps } from "./Item";
import faker from "faker/locale/ru";

let ava: string;
let label: string;

let aTypeItem: ETypeItem[] = Object.keys(ETypeItem).map(
  (e) => ETypeItem[e as keyof typeof ETypeItem]
);

//увеличием вериоятность выпадания людей
aTypeItem.push(...Array(aTypeItem.length).fill(ETypeItem.personal));

const itemType: ETypeItem = faker.random.arrayElement(aTypeItem);
const username: string = faker.name.firstName();

switch (itemType) {
  case ETypeItem.personal:
    ava = faker.image.avatar();
    label = username;
    break;
  default:
    ava = `https://picsum.photos/48`;
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

export default itemTestData;
