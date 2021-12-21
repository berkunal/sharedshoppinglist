import {User} from "./user.model";

export interface AddNewShoppingListForm {
  shoppingListName: string;
  description?: string;
  userList: User[];
  username: string;
}
