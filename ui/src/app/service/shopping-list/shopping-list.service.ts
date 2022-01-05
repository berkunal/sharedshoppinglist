import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShoppingList} from "../../model/shopping-list.model";
import {ShoppingListDto} from "../../model/shopping-list-dto.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  shoppingListUrl = "http://localhost:8080/shopping-lists/";

  constructor(private http: HttpClient) {
  }

  getShoppingLists() {
    return this.http.get<ShoppingListDto[]>(this.shoppingListUrl);
  }

  getShoppingListById(id: string) {
    return this.http.get<ShoppingListDto>(this.shoppingListUrl + encodeURIComponent(id));
  }

  createShoppingList(shoppingList: ShoppingListDto) {
    return this.http.post<ShoppingListDto>(this.shoppingListUrl, shoppingList);
  }

  updateShoppingList(shoppingList: ShoppingListDto) {
    return this.http.put<ShoppingListDto>(this.shoppingListUrl, shoppingList);
  }

  deleteShoppingList(id: string) {
    return this.http.delete(this.shoppingListUrl + encodeURIComponent(id));
  }
}
