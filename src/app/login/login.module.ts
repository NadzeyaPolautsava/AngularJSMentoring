import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './loginPage/loginPage';
import { UserLoginComponent } from './loginPage/components/login';

@NgModule({
  imports: [ 
      CommonModule
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
