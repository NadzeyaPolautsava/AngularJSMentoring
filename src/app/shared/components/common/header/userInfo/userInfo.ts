import { Component, OnInit } from '@angular/core'
import { AuthService } from './../../../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './userInfo.html', 
  styleUrls: ['./userInfo.css'], 
  // providers: [ AuthService ]
})
export class UserInfoComponent implements OnInit {

  public showLoginLink: boolean;

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    this.showLoginLink = !this._authService.isAuthenticated();
  }
}