import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Request, URLSearchParams, RequestMethod, Response, Headers } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { IAuthor } from './../../interfaces/author';
import { ICourse } from './../../interfaces/course';

@Injectable()
export class CourseAuthorService implements OnDestroy {

    public baseUrl: string;
    private alive = true;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3004';
    }

    save(courseId: number, authorId: number) {
        let requestOptions = new RequestOptions();
        let request: Request;
        let urlParams: URLSearchParams = new URLSearchParams();

        requestOptions.url = this.baseUrl + '/courseAuthors';
        requestOptions.method = RequestMethod.Post;
        urlParams.append('courseId', courseId.toString());
        urlParams.append('authorId', authorId.toString());
        
        requestOptions.search = urlParams;

        request = new Request(requestOptions);
        let subscription = this.http.request(request)    
            .map((res: Response) => res.json())
            .takeWhile(() => this.alive)
            .subscribe((json: Object) => {
            });
        
    }

    ngOnDestroy() {
        this.alive = false;
    }
}
