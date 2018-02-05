import { Component, EventEmitter, Output, ViewChild } from '@angular/core'
import { AuthService } from './../../../../core/services/auth.service';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router'


@Component({
  selector: 'login',
  providers: [ ],
  templateUrl: './login.html', 
  styleUrls: ['login.css']
})
export class UserLoginComponent {

  @ViewChild('form') public userForm: NgForm;
  public wrongCreds: Boolean = false;

  constructor(private _authService: AuthService, private router: Router) {
  }

  login (form) {
      this._authService.login(form.value.user.username, form.value.user.password)
      this.wrongCreds = !this.isAuthenticated();
      if (this.isAuthenticated) {
        console.log('aaaaa');
        this.router.navigateByUrl('/courses');
      }   
  }

  isAuthenticated(): boolean {
    return this._authService.isAuthenticated();
  }
}
