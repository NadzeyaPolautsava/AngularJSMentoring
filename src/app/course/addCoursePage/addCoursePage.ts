import { Component } from '@angular/core'
import { CourseListComponent } from './courseList/courseList';

@Component({
  selector: 'add-course-page',
  providers: [],
  templateUrl: './addCoursePage.html', 
  styleUrls: [ './addCoursePage.css' ]
})
export class AddCoursePageComponent {
  
  public title: string = '';

  constructor() {
  }

  saveCourse() {
    console.log('save called');
  }

  cancel() {
    console.log('cancel called');
  }
}
