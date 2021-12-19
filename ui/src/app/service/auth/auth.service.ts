import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LoginForm} from "../../model/login-form.model";
import {User} from "../../model/user.model";
import {BehaviorSubject, map, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<User | null>;
  private loginUrl: string = 'http://localhost:8080/users/authenticate';
  private signupUrl: string = 'http://localhost:8080/users/';
  private userSubject: BehaviorSubject<User | null>;

  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {
    this.userSubject = new BehaviorSubject<User | null>(JSON.parse(<string>localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User | null {
    return this.userSubject.value;
  }

  login(loginForm: LoginForm): Observable<User> {
    return this.http.post<User>(this.loginUrl, loginForm).pipe(map(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(this.signupUrl, user);
  }
}
