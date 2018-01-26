import { Component, EventEmitter, Output, ViewChild } from '@angular/core'
import { AuthService } from './../../../../core/services/auth.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'login',
  providers: [],
  templateUrl: './login.html', 
  styleUrls: ['login.css']
})
export class UserLoginComponent {

  @ViewChild('form') public userForm: NgForm;
  public wrongCreds: Boolean = false;

  constructor(private _authService: AuthService) {
  }

  login (form) {
    // console.log();
      this._authService.login(form.value.user.username, form.value.user.password);
      this.wrongCreds = !this.isAuthenticated();      
  }

  isAuthenticated(): boolean {
    return this._authService.isAuthenticated();
  }
}
