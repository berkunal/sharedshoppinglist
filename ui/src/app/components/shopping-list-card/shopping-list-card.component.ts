import {Component, Input, OnInit} from '@angular/core';
import {ShoppingListDto} from "../../model/shopping-list-dto.model";
import {ShoppingListService} from "../../service/shopping-list/shopping-list.service";
import {MatDialog} from "@angular/material/dialog";
import {AddUserDialogComponent} from "../add-user-dialog/add-user-dialog.component";
import {AddUserForm} from "../../model/add-user-form.model";
import {UserService} from "../../service/user/user.service";
import {first} from "rxjs";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ShoppingListContentDialogComponent} from "../shopping-list-content-dialog/shopping-list-content-dialog.component";
import {ShoppingListContent} from "../../model/shopping-list-content.model";

@Component({
  selector: 'app-shopping-list-card',
  templateUrl: './shopping-list-card.component.html',
  styleUrls: ['./shopping-list-card.component.scss']
})
export class ShoppingListCardComponent implements OnInit {

  @Input() shoppingList: ShoppingListDto | undefined;

  constructor(
    private shoppingListService: ShoppingListService,
    private userService: UserService,
    private _snackbar: MatSnackBar,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    if (!this.shoppingList?.id) return

    this.shoppingListService.getShoppingListById(this.shoppingList?.id).subscribe(shoppingList => {
      this.shoppingList = shoppingList;
    });
  }

  onDeleteClick() {
    if (!this.shoppingList) return
    if (!this.shoppingList.id) return

    this.shoppingListService.deleteShoppingList(this.shoppingList.id).subscribe(() =>
      location.reload()
    );
  }

  onAddUserClick() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      data: {},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result: AddUserForm | undefined) => {
      if (result) {
        this.userService.getUserByName(result.username).pipe(first())
          .subscribe({
            next: user => {
              if (!user) {
                this._snackbar.openFromComponent(SnackBarComponent, {duration: 3000, data: 'User not found!'});
                return;
              }

              if (this.shoppingList?.users.find(u => u.name === user.name)) {
                this._snackbar.openFromComponent(SnackBarComponent, {
                  duration: 3000,
                  data: 'User already exists in the list'
                });
              } else if (this.shoppingList) {
                this.shoppingList.users.push(user);

                this.shoppingListService.updateShoppingList(this.shoppingList).pipe(first()).subscribe({
                  next: () => {
                    this._snackbar.openFromComponent(SnackBarComponent, {
                      duration: 3000,
                      data: user.name + ' have been added to the list!'
                    });
                  },
                  error: () => {
                    this._snackbar.openFromComponent(SnackBarComponent, {
                      duration: 3000,
                      data: 'Something went wrong!'
                    });
                  }
                });
              } else {
                this._snackbar.openFromComponent(SnackBarComponent, {duration: 3000, data: 'Something went wrong!'});
              }
            },
            error: () => {
              this._snackbar.openFromComponent(SnackBarComponent, {duration: 3000, data: 'Something went wrong!'});
            }
          });
      }
    });
  }

  onCardImageClick() {
    const dialogRef = this.dialog.open(ShoppingListContentDialogComponent, {
      data: {
        shoppingList: this.shoppingList,
        updated: false
      }
    });

    dialogRef.afterClosed().subscribe((value: ShoppingListContent) => {
      if (!value) return

      if (!value.updated) {
        this._snackbar.openFromComponent(SnackBarComponent, {duration: 3000, data: 'Nothing to be updated!'});
      } else {
        this.shoppingListService.updateShoppingList(value.shoppingList).pipe(first()).subscribe({
          next: () => {
            this._snackbar.openFromComponent(SnackBarComponent, {
              duration: 3000,
              data: 'List successfully updated!'
            });
          },
          error: () => {
            this._snackbar.openFromComponent(SnackBarComponent, {
              duration: 3000,
              data: 'Something went wrong!'
            });
          }
        });
      }
    });
  }
}
