import {ShoppingList} from "./shopping-list.model";

export interface User {
  id: string;
  name: string;
  shoppingLists: ShoppingList[]
}
