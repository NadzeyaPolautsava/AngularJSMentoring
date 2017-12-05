import { Injectable } from '@angular/core';
import { Course } from './../interfaces/course';

@Injectable()
export class CourseService {

    public courses: Course[] = [
        { id: 1, duration: 100, title: 'Some Video', createdDate: new Date(), description: 'description' },
        { id: 2, duration: 200, title: 'Some Video2', createdDate: new Date(), description: 'description2' },
    ];

    constructor(
    ) { }

    public getList(): Course[] {
        return this.courses;
    }

    public createCourse(duration: number, title: string, createddate: Date, description: string): Course {
        var newCourseId = Math.max.apply(Math, this.courses.map(function (o) { return o.id; })) + 1;
        var c: Course = { id: newCourseId, duration: duration, title: title, createdDate: createddate, description: description };
        this.courses.push(c);
        return c;
    }

    public getItemById(courseId: number): Course {
        let foundCourse = this.courses.find(item => item.id === courseId);
        return foundCourse;
    }

    public updateItem(course: Course) {
        this.removeItem(course.id);
        this.courses.push(course);
    }

    public removeItem(courseId: number) {
        for (var i = this.courses.length - 1; i >= 0; --i) {
            if (this.courses[i].id == courseId) {
                this.courses.splice(i,1);
            }
        }
    }
}
