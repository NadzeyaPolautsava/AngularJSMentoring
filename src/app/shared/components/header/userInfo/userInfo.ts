import { Component, OnInit } from '@angular/core'
import { AuthService } from './../../../../core/services/auth.service';
import { Subscription } from 'rxjs/Subscription';

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
    let userInfo;
    let subject = this._authService.getUserInfo().subscribe(x => userInfo = x);
    subject.unsubscribe();
    return userInfo;
  }


}
