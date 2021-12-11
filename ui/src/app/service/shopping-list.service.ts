import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShoppingList} from "../model/shopping-list.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  shoppingListUrl = "http://localhost:8080/shopping-lists";

  constructor(private http: HttpClient) {
  }

  getShoppingLists() {
    return this.http.get<ShoppingList[]>(this.shoppingListUrl)
  }
}
