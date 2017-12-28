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
}
