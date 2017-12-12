import { Injectable } from '@angular/core';
import { IUser } from './../../interfaces/user';

@Injectable()
export class AuthService {

    private currentUser: IUser;

    public login (user: IUser) {
        this.currentUser = user;
    }

    public logout() {
        this.currentUser = null;
    }

    public isAuthenticated(): boolean {
        return this.currentUser != null;
    }

    public getUserInfo(): string {
        return this.isAuthenticated() ? this.currentUser.username : '';
    }
}
