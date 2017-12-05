import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    public login() {

    }

    public logout() {

    }

    public isAuthenticated(): boolean {
        return false;
    }

    public getUserInfo(): string {
        return 'Dark Knight';
    }
}
