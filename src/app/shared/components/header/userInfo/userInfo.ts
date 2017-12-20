import { Component, OnInit } from '@angular/core'
import { AuthService } from './../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './userInfo.html', 
  styleUrls: ['./userInfo.css'], 
})
export class UserInfoComponent implements OnInit {

  public showLoginLink: boolean;

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    this.showLoginLink = !this._authService.isAuthenticated();
  }

  isAuthenticated(): boolean {
    return this._authService.isAuthenticated();
  }

  getUserName(): string {
    return this._authService.getUserInfo();
  }
}
