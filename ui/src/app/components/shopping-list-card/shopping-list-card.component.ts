import {Component, Input, OnInit} from '@angular/core';
import {ShoppingListDto} from "../../model/shopping-list-dto.model";

@Component({
  selector: 'app-shopping-list-card',
  templateUrl: './shopping-list-card.component.html',
  styleUrls: ['./shopping-list-card.component.scss']
})
export class ShoppingListCardComponent implements OnInit {

  @Input() shoppingList: ShoppingListDto | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
