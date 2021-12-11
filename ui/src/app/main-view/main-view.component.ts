import {Component, OnInit} from '@angular/core';
import {ShoppingList} from "../model/shopping-list.model";
import {ShoppingListService} from "../service/shopping-list.service";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  shoppingLists: ShoppingList[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.shoppingListService.getShoppingLists().subscribe(value => {
      this.shoppingLists = value
    });
  }

}
