import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../service/auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {SnackBarComponent} from "../components/snack-bar/snack-bar.component";
import {User} from "../model/user.model";
import {first} from "rxjs";

@Component({
  selector: 'app-signup-view',
  templateUrl: './signup-view.component.html',
  styleUrls: ['./signup-view.component.scss']
})
export class SignupViewComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  onSignupClick() {
    this.name.markAllAsTouched();
    this.password.markAllAsTouched();

    if (this.name.value && this.password.value) {
      const user: User = {
        name: this.name.value,
        password: this.password.value,
        shoppingLists: []
      }

      this.authService.signup(user).pipe(first())
        .subscribe({
          next: () => {
            this.openSnackBar('Sign up successful!');
            const returnUrl = '/login';
            this.router.navigateByUrl(returnUrl)
          },
          error: () => {
            this.openSnackBar('Something went wrong!');
          }
        });
    } else {
      this.openSnackBar('Please provide username and password!');
    }
  }

  openSnackBar(msg: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {duration: 5000, data: msg});
  }
}
