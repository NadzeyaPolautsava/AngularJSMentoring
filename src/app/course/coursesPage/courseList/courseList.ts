import { Component, OnInit } from '@angular/core'
import { ICourse } from './../../../interfaces/course';
import { CourseService } from  './../../../core/services/course.service';

@Component({
  selector: 'course-list',
  providers: [],
  templateUrl: './courseList.html', 
  styleUrls: []
})
export class CourseListComponent implements OnInit {

  public courses: ICourse[];

  constructor(private _courseService: CourseService) {
  }

  ngOnInit() {
    this.courses = this._courseService.getList();
  }

  deleteItem($event) {
    console.log($event);
    this._courseService.removeItem($event.value);
    console.log("Courses:");
    console.log(this.courses);
  }
}
