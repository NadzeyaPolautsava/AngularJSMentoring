import { Component, OnInit, OnDestroy } from '@angular/core'
import { AuthService } from './../../../../core/services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './userInfo.html', 
  styleUrls: ['./userInfo.css'], 
})
export class UserInfoComponent implements OnInit, OnDestroy {

  public showLoginLink: boolean;
  private alive = true;

  constructor(private _authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.showLoginLink = !this._authService.isAuthenticated();
  }

  isAuthenticated(): boolean {
    return this._authService.isAuthenticated();
  }

  getUserName(): string {
    let userInfo;
    let subject = this._authService.getUserInfo()
      .takeWhile(() => this.alive)
      .subscribe(x => userInfo = x);
    return userInfo;
  }

  doLogOut() {
    this._authService.logout();
    this.router.navigateByUrl('login');
  }

  ngOnDestroy() {
    this.alive = false;
  }


}
