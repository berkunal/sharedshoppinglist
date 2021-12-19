import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../service/auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../components/snack-bar/snack-bar.component";
import {first} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  onLoginClick() {
    this.name.markAllAsTouched();
    this.password.markAllAsTouched();

    if (this.name.value && this.password.value) {
      this.authService.login({name: this.name.value, password: this.password.value}).pipe(first())
        .subscribe({
          next: () => {
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl)
          },
          error: () => {
            this.openSnackBar('Authentication Failed!');
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
