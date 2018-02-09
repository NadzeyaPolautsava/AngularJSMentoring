import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { LoginPageComponent } from './loginPage/loginPage';
import { UserLoginComponent } from './loginPage/components/login';
import { UserEffects } from './../effects/user.effect'
import {EffectsModule} from '@ngrx/effects';
import { userReducer }  from './../reducers/auth.reducer'
import { UserActions } from './../actions/userActions';


@NgModule({
  imports: [ 
      CommonModule, 
      FormsModule, 
      StoreModule.forRoot(userReducer),
      EffectsModule.run(UserEffects)

  ],
  declarations: [
    LoginPageComponent, 
    UserLoginComponent
  ], 
  exports: [
    LoginPageComponent
  ], 
  providers: [UserActions]

})
export class LoginModule { }
