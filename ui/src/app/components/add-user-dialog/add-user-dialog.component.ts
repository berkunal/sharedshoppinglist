import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddNewShoppingListForm} from "../../model/add-new-sl-form";
import {AddUserForm} from "../../model/add-user-form.model";
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent {

  username = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddUserForm,
    private _snackBar: MatSnackBar
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getUsernameErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a value' : '';
  }

  onAddClick() {
    if (this.username.hasError('required')) {
      this._snackBar.openFromComponent(SnackBarComponent, {duration: 3000, data: 'Please enter a username!'});
    } else {
      this.data.username = this.username.value;
      this.dialogRef.close(this.data);
    }
  }
}
