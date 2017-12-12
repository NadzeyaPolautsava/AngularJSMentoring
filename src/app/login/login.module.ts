import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }        from './../shared/shared.module';

import { LoginPageComponent } from './loginPage/loginPage';
import { UserLoginComponent } from './loginPage/components/login';

@NgModule({
  imports: [ 
      SharedModule, 
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
