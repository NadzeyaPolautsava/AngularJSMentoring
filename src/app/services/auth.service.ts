import { Injectable } from '@angular/core';
import { User } from './../interfaces/user';

@Injectable()
export class AuthService {

    private currentUser: User;

    public login (user: User) {
        this.currentUser = user;
    }

    public logout() {
        this.currentUser = null;
    }

    public isAuthenticated(): boolean {
        return this.currentUser != null;
    }

    public getUserInfo(): string {
        return this.currentUser != null ? this.currentUser.username : '';
    }
}
