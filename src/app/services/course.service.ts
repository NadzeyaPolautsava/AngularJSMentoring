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
        let newCourseId = Math.max.apply(Math, this.courses.map(function (o) { o => o.id })) + 1;
        let c: Course = { 
            id: newCourseId, 
            duration: duration, 
            title: title, 
            createdDate: createddate, 
            description: description 
        };
        this.courses.push(c);
        return c;
    }

    public getItemById(courseId: number): Course {
        let foundCourse = this.courses.find(item => item.id === courseId);
        return foundCourse;
    }

    public updateItem(course: Course) {
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
