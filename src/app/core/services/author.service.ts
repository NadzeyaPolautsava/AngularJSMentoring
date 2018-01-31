import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Request, URLSearchParams, RequestMethod, Response, Headers } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { IAuthor } from './../../interfaces/author';

@Injectable()
export class AuthorService implements OnDestroy {
    private subscription: Subscription;
    public baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3004';
    }

    public getList(): Observable<IAuthor[]> {
        let requestOptions = new RequestOptions();
        let request: Request;

        requestOptions.url = this.baseUrl + '/authors';
        requestOptions.method = RequestMethod.Get;

        request = new Request(requestOptions);
        return this.http.request(request)
            .map((res: Response) => res.json());
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
