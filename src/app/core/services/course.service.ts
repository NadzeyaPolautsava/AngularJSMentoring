import { Injectable } from '@angular/core';
import { ICourse } from './../../interfaces/course';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';


@Injectable()
export class CourseService {

    public courses: ICourse[] = [
        { id: 1, duration: 100, title: 'Some Video', createdDate: new Date("February 4, 2022 10:13:00"), description: 'description', topRated: false },
        { id: 2, duration: 200, title: 'Some Video2', createdDate: new Date("February 4, 2016 10:13:00"), description: 'description2', topRated : true },
        { id: 3, duration: 15, title: 'Some Video3', createdDate: new Date("February 4, 2016 10:13:00"), description: 'description2', topRated : true },
        
    ];

    constructor(
    ) { }

    public getList(): Observable<ICourse> {
        return Observable.from(this.courses);
    }

    public createCourse(duration: number, title: string, createddate: Date, description: string): Observable<ICourse> {
        let newCourseId = Math.max.apply(Math, this.courses.map(function (o) { o => o.id })) + 1;
        let c: ICourse = { 
            id: newCourseId, 
            duration: duration, 
            title: title, 
            createdDate: createddate, 
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
