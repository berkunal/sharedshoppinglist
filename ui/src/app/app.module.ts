import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShoppingListCardComponent} from './components/shopping-list-card/shopping-list-card.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MainViewComponent} from './main-view/main-view.component';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import { LoginViewComponent } from './login-view/login-view.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import { SignupViewComponent } from './signup-view/signup-view.component';
import { AddNewShoppingListDialogComponent } from './components/add-new-shopping-list-dialog/add-new-shopping-list-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatBadgeModule} from "@angular/material/badge";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListCardComponent,
    MainViewComponent,
    LoginViewComponent,
    SnackBarComponent,
    SignupViewComponent,
    AddNewShoppingListDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
