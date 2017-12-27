import { Component, OnInit, Input } from '@angular/core'
import { ICourse } from './../../../interfaces/course';
import { CourseService } from  './../../../core/services/course.service';
import { TitlePipe } from './../../../shared/pipes/title.pipe';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map'

@Component({
  selector: 'course-list',
  providers: [],
  templateUrl: './courseList.html', 
  styleUrls: ['./courseList.css']
})
export class CourseListComponent implements OnInit {

  public courses: ICourse[] = [];

  constructor(private _courseService: CourseService) {
  }

  ngOnInit() {
    let today: Date = new Date();
    let twoWeeksBefore = new Date(today.getDate() - 14);
    this.fetchCourses();
  }

  deleteItem($event) {
    this._courseService.removeItem($event.value);
    this.courses = [];
    this.fetchCourses();
  }

  filter(title: string) {
    this.courses = new TitlePipe().transform(this._courseService.courses, title);
  }

  fetchCourses(): void {
    let today = new Date();
    let twoWeeksBefore = new Date();
    twoWeeksBefore.setDate(today.getDate() - 14);
    console.log('today ' + today);
    console.log('twoWeeksBefore ' + twoWeeksBefore);
    let subscription = this._courseService.getList().filter(x => x.date > twoWeeksBefore)
    .map(x => x as ICourse)
    .subscribe(
        x => this.courses.push(x), 
        e => console.log(e), 
        () => console.log('data received')
    );
    subscription.unsubscribe();
  }
}
