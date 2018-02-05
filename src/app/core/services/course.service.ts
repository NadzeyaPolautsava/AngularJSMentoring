import { Injectable, OnDestroy } from '@angular/core';
import { ICourse } from './../../interfaces/course';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Http, RequestOptions, Request, URLSearchParams, RequestMethod, Response, Headers } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class CourseService {

    public courses: ICourse[] = [
        { id: 1, duration: 100, title: 'Some Video', date: new Date("February 4, 2022 10:13:00"), description: 'description', topRated: true },
        { id: 2, duration: 200, title: 'Some Video2', date: new Date("February 4, 2016 10:13:00"), description: 'description2', topRated: true },
        { id: 3, duration: 15, title: 'Some Video3', date: new Date("February 4, 2016 10:13:00"), description: 'description2', topRated: true },

    ];

    public baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3004';
    }

    public getList(page: number): Observable<ICourse[]> {
        let requestOptions = new RequestOptions();
        let request: Request;
        let searchParams: URLSearchParams = new URLSearchParams();

        searchParams.append('_page', page.toString());
        requestOptions.url = this.baseUrl + '/courses';
        requestOptions.method = RequestMethod.Get;
        requestOptions.search = searchParams;

        request = new Request(requestOptions);
        return this.http.request(request)
            .map((res: Response) => res.json());
    }

    public find(page: number, title: string): Observable<ICourse[]> {
        let requestOptions = new RequestOptions();
        let request: Request;
        let searchParams: URLSearchParams = new URLSearchParams();

        searchParams.append('_page', page.toString());
        searchParams.append('title_like', title);
        requestOptions.url = this.baseUrl + '/courses';
        requestOptions.method = RequestMethod.Get;
        requestOptions.search = searchParams;

        request = new Request(requestOptions);
        return this.http.request(request)
            .map((res: Response) => res.json());
    }

    public getTotalCount(): Observable<Number> {
        let requestOptions = new RequestOptions();
        let request: Request;
        let searchParams: URLSearchParams = new URLSearchParams();

        searchParams.append('_page', '1');
        requestOptions.url = this.baseUrl + '/courses';
        requestOptions.method = RequestMethod.Get;
        requestOptions.search = searchParams;

        request = new Request(requestOptions);
        return this.http.request(request)
            .map((res: Response) => Number(res.headers.get('X-Total-Count')));
    }

    public createCourse(duration: number, title: string, createddate: Date, description: string): Observable<ICourse> {
        let requestOptions = new RequestOptions();
        let request: Request;
        let headers = new Headers({ 'Content-Type': 'application/json' });

        requestOptions.url = this.baseUrl + '/courses';
        requestOptions.method = RequestMethod.Post;
        requestOptions.headers = headers;
        let course = {
            title: title, 
            duration: duration, 
            date: createddate, 
            description: description, 
            topRated: false
        };
        let body = JSON.stringify(course); 
        requestOptions.body =  body;

        request = new Request(requestOptions);
        return this.http.request(request)
            .map((res: Response) => res.json());
    }

    public getItemById(courseId: number): Observable<ICourse> {
        let requestOptions = new RequestOptions();
        let request: Request;
        let searchParams: URLSearchParams = new URLSearchParams();

        searchParams.append('id', courseId.toString());
        requestOptions.url = this.baseUrl + '/courses';
        requestOptions.method = RequestMethod.Get;
        requestOptions.search = searchParams;

        request = new Request(requestOptions);
        return this.http.request(request)
            .map((res: Response) => res.json());
    }

    public updateItem(course: ICourse) {
        let requestOptions = new RequestOptions();
        let request: Request;
        let headers = new Headers({ 'Content-Type': 'application/json' });

        requestOptions.url = this.baseUrl + '/courses/' + course.id.toString();
        requestOptions.method = RequestMethod.Put;
        requestOptions.headers = headers;

        let body = JSON.stringify(course); 
        requestOptions.body =  body;

        request = new Request(requestOptions);
        return this.http.request(request)
            .map((res: Response) => res.json());
    }

    public removeItem(courseId: number) {
        let requestOptions = new RequestOptions();
        let request: Request;
        requestOptions.url = this.baseUrl + '/courses/' + courseId;
        requestOptions.method = RequestMethod.Delete;

        request = new Request(requestOptions);
        return this.http.request(request)
            .map((res: Response) => res.json());
    }
}
