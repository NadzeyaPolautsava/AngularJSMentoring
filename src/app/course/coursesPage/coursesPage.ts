import { Component, ViewChild } from '@angular/core'
import { CourseListComponent } from './courseList/courseList';

@Component({
  selector: 'courses-page',
  providers: [],
  templateUrl: './coursesPage.html', 
  styleUrls: []
})
export class CoursesPageComponent {
    
  @ViewChild('child') child: CourseListComponent;
  constructor() {
  }

  public query: string = '';

  findCourse($event) {
    console.log('IN COURSE PAGE');
    this.query = $event.value;
    this.child.filter(this.query);
  }
}
