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
        let headers = new Headers({ 'Content-Type': 'application/json' });

        requestOptions.url = this.baseUrl + '/courseAuthors';
        requestOptions.method = RequestMethod.Post;

        let courseAuthor = {
            courseId: courseId, 
            authorId: authorId
        }
        requestOptions.headers = headers;
        requestOptions.body = JSON.stringify(courseAuthor);

        request = new Request(requestOptions);
        let subscription = this.http.request(request)    
            .map((res: Response) => res.json())
            .takeWhile(() => this.alive)
            .subscribe((json: Object) => {
            });
        
    }

    remove(recordId: number) {
        let requestOptions = new RequestOptions();
        let request: Request;

        requestOptions.url = this.baseUrl + '/courseAuthors/' + recordId.toString();
        requestOptions.method = RequestMethod.Delete;

        request = new Request(requestOptions);
        let subscription = this.http.request(request)    
            .map((res: Response) => res.json())
            .takeWhile(() => this.alive)
            .subscribe((json: Object) => {
            });
    }

    removeAll(courseId: number) {
        let requestOptions = new RequestOptions();
        let request: Request;
        let searchParams: URLSearchParams = new URLSearchParams();
        searchParams.append('courseId', courseId.toString());
        
        requestOptions.url = this.baseUrl + '/courseAuthors';
        requestOptions.method = RequestMethod.Delete;
        requestOptions.search = searchParams;

        request = new Request(requestOptions);
        let subscription = this.http.request(request)    
            .map((res: Response) => res.json())
            .takeWhile(() => this.alive)
            .subscribe((json: Object) => {
            });
    }

    fetchForCourse(courseId: number) {
        let requestOptions = new RequestOptions();
        let request: Request;
        let searchParams: URLSearchParams = new URLSearchParams();

        searchParams.append('courseId', courseId.toString());
        requestOptions.url = this.baseUrl + '/courseAuthors';
        requestOptions.method = RequestMethod.Get;
        requestOptions.search = searchParams;

        request = new Request(requestOptions);
        return this.http.request(request)
            .map((res: Response) => res.json());
    }

    ngOnDestroy() {
        this.alive = false;
    }
}
