import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "../service/shopping-list/shopping-list.service";
import {AuthService} from "../service/auth/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {AddNewShoppingListDialogComponent} from "../components/add-new-shopping-list-dialog/add-new-shopping-list-dialog.component";
import {User} from "../model/user.model";
import {AddNewShoppingListForm} from "../model/add-new-sl-form";
import {ShoppingListDto} from "../model/shopping-list-dto.model";
import {UserInfo} from "../model/user-info.model";
import {first} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../components/snack-bar/snack-bar.component";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  shoppingLists: ShoppingListDto[] = [];
  username: string = '';
  private user: User | undefined;

  constructor(
    private shoppingListService: ShoppingListService,
    private authService: AuthService,
    private _snackbar: MatSnackBar,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getShoppingLists();
    if (this.authService.userValue) {
      this.username = this.authService.userValue.name;
      this.user = this.authService.userValue;
    }
  }

  onLogoutClick() {
    this.authService.logout();
  }

  onAddShoppingListClick() {
    const dialogRef = this.dialog.open(AddNewShoppingListDialogComponent, {
      data: {
        username: this.username
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result: AddNewShoppingListForm | undefined) => {
      if (result) {
        console.log(result)
        const shoppingList: ShoppingListDto = {
          name: result.shoppingListName,
          description: result.description ?? '',
          subShoppingLists: [],
          users: [
            this.user as UserInfo
          ]
        }
        this.shoppingListService.createShoppingList(shoppingList).pipe(first())
          .subscribe({
            next: () => {
              this.getShoppingLists();
            },
            error: () => {
              this._snackbar.openFromComponent(SnackBarComponent, {data: 'Something went wrong!'})
            }
          });
      }
    });
  }

  private getShoppingLists() {
    this.shoppingListService.getShoppingLists().subscribe(value => {
      this.shoppingLists = value
    });
  }
}
