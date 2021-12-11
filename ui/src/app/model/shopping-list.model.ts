import {User} from "./user.model";
import {SubShoppingList} from "./sub-shopping-list.model";

export interface ShoppingList {
  id: string;
  name: string;
  description: string;
  subShoppingLists: SubShoppingList[];
  users: User[]
}
