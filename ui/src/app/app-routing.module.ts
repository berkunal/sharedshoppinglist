import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from "./main-view/main-view.component";
import {LoginViewComponent} from "./login-view/login-view.component";
import {LoginGuard} from "./service/auth/login.guard";
import {SignupViewComponent} from "./signup-view/signup-view.component";

const routes: Routes = [
  { path: 'login', component: LoginViewComponent},
  { path: 'signup', component: SignupViewComponent},
  { path: '', component: MainViewComponent, canActivate: [LoginGuard] },
  { path: '**', component: MainViewComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
