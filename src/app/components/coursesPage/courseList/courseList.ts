import { Component, OnInit } from '@angular/core'
import { Course } from './../../../interfaces/course';
import { CourseService } from './../../../services/course.service';

@Component({
  selector: 'course-list',
  providers: [ CourseService ],
  templateUrl: './courseList.html', 
  styleUrls: []
})
export class CourseListComponent implements OnInit {

  public courses: Course[];

  constructor(private _courseService: CourseService) {
  }

  ngOnInit() {
    this.courses = this._courseService.getList();
  }

  deleteItem($event) {
    console.log($event);
  }
}
