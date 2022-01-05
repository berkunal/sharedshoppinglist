import {ShoppingList} from "./shopping-list.model";

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  shoppingLists: ShoppingList[]
}
