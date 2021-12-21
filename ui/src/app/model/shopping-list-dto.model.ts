import {SubShoppingList} from "./sub-shopping-list.model";
import {UserInfo} from "./user-info.model";

export interface ShoppingListDto {
  id?: string;
  name: string;
  description: string;
  subShoppingLists: SubShoppingList[];
  users: UserInfo[]
}
