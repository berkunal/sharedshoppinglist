import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-app-sub-shopping-list-dialog',
  templateUrl: './app-sub-shopping-list-dialog.component.html',
  styleUrls: ['./app-sub-shopping-list-dialog.component.scss']
})
export class AppSubShoppingListDialogComponent {

  public subListName: string = "";

  constructor(public dialogRef: MatDialogRef<AppSubShoppingListDialogComponent>) {
  }

  onAddClick(): void {
    this.dialogRef.close(this.subListName);
  }

  onCancelClick() {
    this.dialogRef.close("");
  }
}
