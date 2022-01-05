import {Item} from "./item.model";

export interface SubShoppingList {
  id?: string;
  name: string;
  items: Item[]
}
