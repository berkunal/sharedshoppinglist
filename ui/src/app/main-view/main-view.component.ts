import {Component, OnInit} from '@angular/core';
import {ShoppingList} from "../model/shopping-list.model";
import {ShoppingListService} from "../service/shopping-list/shopping-list.service";
import {AuthService} from "../service/auth/auth.service";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  shoppingLists: ShoppingList[] = [];
  username: string = '';

  constructor(
    private shoppingListService: ShoppingListService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.shoppingListService.getShoppingLists().subscribe(value => {
      this.shoppingLists = value
    });
    if (this.authService.userValue) {
      this.username = this.authService.userValue.name;
    }
  }

  onLogoutClick() {
    this.authService.logout();
  }
}
