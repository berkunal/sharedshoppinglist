import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Item} from "../../model/item.model";

@Component({
  selector: 'app-add-new-item-dialog',
  templateUrl: './add-new-item-dialog.component.html',
  styleUrls: ['./add-new-item-dialog.component.scss']
})
export class AddNewItemDialogComponent {

  public item: Item = {
    name: '',
    quantity: 0
  };

  constructor(
    public dialogRef: MatDialogRef<AddNewItemDialogComponent>
  ) {
  }

  onAddClick(): void {
    this.dialogRef.close(this.item);
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
