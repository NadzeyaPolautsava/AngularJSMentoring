import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginPageComponent } from './loginPage/loginPage';
import { UserLoginComponent } from './loginPage/components/login';

@NgModule({
  imports: [ 
      CommonModule, 
      FormsModule
  ],
  declarations: [
    LoginPageComponent, 
    UserLoginComponent
  ], 
  exports: [
    LoginPageComponent
  ]
})
export class LoginModule { }
