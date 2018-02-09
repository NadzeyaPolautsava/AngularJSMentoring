import { Component, EventEmitter, Output, ViewChild } from '@angular/core'
import { AuthService } from './../../../../core/services/auth.service';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router'
import { UserActions } from './../../../../actions/userActions';
import { AppState } from './../../../../reducers/';
import { Store } from '@ngrx/store';
import { IUser } from './../../../../interfaces/user';
import {Observable} from "rxjs";


@Component({
  selector: 'login',
  providers: [ ],
  templateUrl: './login.html', 
  styleUrls: ['login.css']
})
export class UserLoginComponent {

  @ViewChild('form') public userForm: NgForm;
  public wrongCreds: Boolean = false;
  private user: Observable<IUser>;
  

  constructor(
    private store: Store<AppState>,
    private userActions: UserActions,
    private _authService: AuthService, 
    private router: Router) {
      this.user = store.select('user');
  }

  login (form) {
    let user = {
      username: form.value.username, 
      password: form.value.password, 
      token: ""
    };
    this.store.dispatch(this.userActions.login(user));
      // this._authService.login(form.value.username, form.value.password);
      // this.wrongCreds = !this.isAuthenticated();
      // if (this.isAuthenticated) {
      //   console.log('aaaaa');
      //   this.router.navigateByUrl('/courses');
      // }   
  }

  isAuthenticated(): boolean {
    return this._authService.isAuthenticated();
  }
}
