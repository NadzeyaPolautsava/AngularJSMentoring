import { Injectable } from '@angular/core';
import { ICourse } from './../../interfaces/course';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Http, RequestOptions, Request, URLSearchParams, RequestMethod, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CourseService {

    public courses: ICourse[] = [
        { id: 1, duration: 100, title: 'Some Video', date: new Date("February 4, 2022 10:13:00"), description: 'description', topRated: true },
        { id: 2, duration: 200, title: 'Some Video2', date: new Date("February 4, 2016 10:13:00"), description: 'description2', topRated : true },
        { id: 3, duration: 15, title: 'Some Video3', date: new Date("February 4, 2016 10:13:00"), description: 'description2', topRated : true },
        
    ];

    public baseUrl: string;

    constructor(private http: HttpClient) { 
        this.baseUrl = 'http://localhost:3004';
    }

    public getList(): Observable<ICourse[]> {

        return this.http.get<ICourse[]>('http://localhost:3004/courses');
        // return this.http.get<ICourse[]>('http://localhost:3004/courses');
        // console.log('in getList');
        // let requestOptions = new RequestOptions();
        // let request: Request;
        // // let urlParams: URLSearchParams = new URLSearchParams();

        // requestOptions.url = this.baseUrl + '/courses';
        // requestOptions.method = RequestMethod.Get;
        // request = new Request(requestOptions);
        // this.http.get('http://localhost:3004/courses').subscribe(data => {
        //     // Read the result field from the JSON response.
        //     console.log(data);
        //   });
        // return Observable.from(this.courses);
        // this.http.request(request).subscribe( data => {
        //     console.log(data);
        // });
        // let res: Observable<ICourse> = this.http.request(request)
        //     .map((res:Response) => res.json());
        
    }

    public createCourse(duration: number, title: string, createddate: Date, description: string): Observable<ICourse> {
        let newCourseId = Math.max.apply(Math, this.courses.map(function (o) { o => o.id })) + 1;
        let c: ICourse = { 
            id: newCourseId, 
            duration: duration, 
            title: title, 
            date: createddate, 
            topRated: false,
            description: description 
        };
        this.courses.push(c);
        return Observable.of(c);
    }

    public getItemById(courseId: number): Observable<ICourse> {
        let foundCourse = this.courses.find(item => item.id === courseId);
        return Observable.of(foundCourse);
    }

    public updateItem(course: ICourse) {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].id == course.id) {
                this.courses[i] = course;
                break;
            }
        }
    }

    public removeItem(courseId: number) {
        for (let i = 0; i < this.courses.length; ++i) {
            if (this.courses[i].id == courseId) {
                this.courses.splice(i, 1);
            }
        }
    }
}
