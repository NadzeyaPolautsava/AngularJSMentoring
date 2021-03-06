import { Injectable, OnDestroy } from '@angular/core';
import { IUser } from './../../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Http, RequestOptions, Request, URLSearchParams, RequestMethod, Response, Headers } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AuthService implements OnDestroy {

    private currentUser: IUser;
    private subject: ReplaySubject<string>;
    private alive: boolean = true;

    public baseUrl: string;
    
    constructor(private http: Http) { 
        this.baseUrl = 'http://localhost:3004';
        this.subject = new ReplaySubject<string>();        
    }

    // public login (username: string, password: string) {
    //     let requestOptions = new RequestOptions();
    //     let request: Request;
    //     let urlParams: URLSearchParams = new URLSearchParams();

    //     requestOptions.url = this.baseUrl + '/users';
    //     requestOptions.method = RequestMethod.Get;
    //     urlParams.append('username', username);
    //     urlParams.append('password', password);
        
    //     requestOptions.search = urlParams;

    //     request = new Request(requestOptions);
    //     let subscription = this.http.request(request)    
    //         .map((res: Response) => res.json())
    //         .takeWhile(() => this.alive)
    //         .subscribe((json: Object) => {
    //             var ar = <IUser[]> json;
    //             if (ar.length > 0) {
    //                 this.currentUser = ar[0];
    //                 this.subject.next(this.currentUser.username);
    //             }
    //         });
    // }

    public login (username: string, password: string): Observable<IUser> {
        let requestOptions = new RequestOptions();
        let request: Request;
        let urlParams: URLSearchParams = new URLSearchParams();

        requestOptions.url = this.baseUrl + '/users';
        requestOptions.method = RequestMethod.Get;
        urlParams.append('username', username);
        urlParams.append('password', password);
        
        requestOptions.search = urlParams;

        request = new Request(requestOptions);
        return this.http.request(request)    
            .map((res: Response) => res.json());
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

    public setUser(u: IUser) {
        this.currentUser = u;
    }

    ngOnDestroy() {
        this.alive = false;
    }
}
