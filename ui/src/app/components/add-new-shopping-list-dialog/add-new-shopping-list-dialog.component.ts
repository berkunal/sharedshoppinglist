import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddNewShoppingListForm} from "../../model/add-new-sl-form";
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";

@Component({
  selector: 'app-add-new-shopping-list-dialog',
  templateUrl: './add-new-shopping-list-dialog.component.html',
  styleUrls: ['./add-new-shopping-list-dialog.component.scss']
})
export class AddNewShoppingListDialogComponent {

  listName = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.maxLength(256)]);

  constructor(
    public dialogRef: MatDialogRef<AddNewShoppingListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddNewShoppingListForm,
    private _snackBar: MatSnackBar
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getListNameErrorMessage() {
    return this.listName.hasError('required') ? 'You must enter a value' : '';
  }

  getDescriptionNameErrorMessage() {
    return this.listName.hasError('maxLength') ? 'Too long!' : '';
  }

  onConfirmClick() {
    if (this.listName.hasError('required')) {
      this._snackBar.openFromComponent(SnackBarComponent, {duration: 3000, data: 'Please fill the form!'});
    } else {
      this.data.shoppingListName = this.listName.value;
      this.data.description = this.description.value;
      this.dialogRef.close(this.data);
    }
  }
}
