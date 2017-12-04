import { Injectable } from '@angular/core';
import { Course } from './../interfaces/course';

@Injectable()
export class CourseService {

    public courses : Course[] = [
        { id: 1, duration: 100, title: 'Some Video', createdDate: new Date(), description: 'description'}, 
        { id: 2, duration: 200, title: 'Some Video2', createdDate: new Date(), description: 'description2'}, 
      ];

  constructor(
  ) {}

  public getList() : Course[] {
    return this.courses;
  }

}
