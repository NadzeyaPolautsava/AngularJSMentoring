import { Component } from '@angular/core'
import { LogoComponent } from './logo/logo'
import { AuthService } from './../../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})
export class HeaderComponent {
  constructor(private _authService: AuthService) {}
}
