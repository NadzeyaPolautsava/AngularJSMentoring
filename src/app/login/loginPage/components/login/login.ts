import { Component, EventEmitter, Output } from '@angular/core'
import { AuthService } from './../../../../core/services/auth.service';


@Component({
  selector: 'login',
  providers: [],
  templateUrl: './login.html', 
  styleUrls: ['login.css']
})
export class UserLoginComponent {

  constructor(private _authService: AuthService) {
  }

  login (username: string, password: string) {
      this._authService.login(username, password);
      console.log(this._authService.getUserInfo());
  }

  isAuthenticated(): boolean {
    return this._authService.isAuthenticated();
  }
}
