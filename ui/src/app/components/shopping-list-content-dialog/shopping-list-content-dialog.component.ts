import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ShoppingListContent} from "../../model/shopping-list-content.model";
import {SubShoppingList} from "../../model/sub-shopping-list.model";
import {AppSubShoppingListDialogComponent} from "../app-sub-shopping-list-dialog/app-sub-shopping-list-dialog.component";
import {AddNewItemDialogComponent} from "../add-new-item-dialog/add-new-item-dialog.component";
import {Item} from "../../model/item.model";

@Component({
  selector: 'app-shopping-list-content-dialog',
  templateUrl: './shopping-list-content-dialog.component.html',
  styleUrls: ['./shopping-list-content-dialog.component.scss']
})
export class ShoppingListContentDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ShoppingListContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ShoppingListContent,
    public dialog: MatDialog
  ) {
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data);
  }

  addSubListClick() {
    const dialogRef = this.dialog.open(AppSubShoppingListDialogComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((value: string) => {
      if (value !== "") {
        const newSubList: SubShoppingList = {
          name: value,
          items: []
        }

        this.data.shoppingList.subShoppingLists.push(newSubList);
        this.data.updated = true;
      }
    });
  }

  addNewItemClick(subShoppingList: SubShoppingList) {
    const dialogRef = this.dialog.open(AddNewItemDialogComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((item: Item | undefined) => {
      if (item && item?.name !== "") {
        subShoppingList.items.push(item);
        this.data.updated = true;
      }
    });
  }
}
