import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShoppingList} from "../../model/shopping-list.model";
import {ShoppingListDto} from "../../model/shopping-list-dto.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  shoppingListUrl = "http://localhost:8080/shopping-lists";

  constructor(private http: HttpClient) {
  }

  getShoppingLists() {
    return this.http.get<ShoppingListDto[]>(this.shoppingListUrl)
  }

  createShoppingList(shoppingList: ShoppingListDto) {
    return this.http.post<ShoppingListDto>(this.shoppingListUrl, shoppingList);
  }
}
