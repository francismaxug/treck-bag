export interface IItems {
  id: number;
  name: string;
  packed: boolean;
}


export const initialItems: IItems[] = [
  {
    id: 1,
    name: "good mood",
    packed: true,
  },
  {
    id: 2,
    name: "passport",
    packed: false,
  },
  {
    id: 3,
    name: "phone charger",
    packed: false,
  },
];
