import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
 
@Injectable()
export class CanActivateGuard implements CanActivate {

    constructor(private _authService: AuthService) {

    }

    canActivate() {
        return this._authService.isAuthenticated();
    }
}