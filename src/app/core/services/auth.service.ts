import { Injectable } from '@angular/core';
import { IUser } from './../../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';



@Injectable()
export class AuthService {

    private currentUser: IUser;
    private subject: ReplaySubject<string>;

    constructor() {
        this.subject = new ReplaySubject<string>();        
    }

    public login (user: IUser) {
        this.currentUser = user;
        this.subject.next(user.username);
    }

    public logout() {
        this.currentUser = null;
        this.subject.next('');
    }

    public isAuthenticated(): boolean {
        return this.currentUser != null;
    }

    public getUserInfo(): ReplaySubject<string> {
        this.subject.next(this.isAuthenticated() ? this.currentUser.username : '');
        return this.subject;
    }
}
