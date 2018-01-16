import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { ICourse } from './../../../interfaces/course';
import { CourseService } from './../../../core/services/course.service';
import { TitlePipe } from './../../../shared/pipes/title.pipe';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'course-list',
  providers: [],
  templateUrl: './courseList.html',
  styleUrls: ['./courseList.css']
})
export class CourseListComponent implements OnInit, OnDestroy {

  public courses: ICourse[] = [];
  private courseListSubscription: Subscription;

  constructor(private _courseService: CourseService) {
  }

  ngOnInit() {
    let today: Date = new Date();
    let twoWeeksBefore = new Date(today.getDate() - 14);
    this.fetchCourses();
  }

  deleteItem($event) {
    let deleteSubscription = this._courseService.removeItem($event.value)
      .subscribe(
        x => console.log(x),
        e => console.log(e),
        () => {
          deleteSubscription.unsubscribe(); // is it okay???????
          this.fetchCourses();
      });
  }

  filter(title: string) {
    this.courses = new TitlePipe().transform(this._courseService.courses, title);
  }

  fetchCourses(): void {
    if (this.courseListSubscription) {
      this.courseListSubscription.unsubscribe();
    }
    let today = new Date();
    let twoWeeksBefore = new Date();

    twoWeeksBefore.setDate(today.getDate() - 14);
    console.log('twoWeeksBefore: ' + twoWeeksBefore);
    this._courseService.getList()
      .map(courses => courses.filter(course => (course.topRated)))
      .subscribe(
      x => {
        this.courses = x;
        console.log('Length: ' + x.length)
      },
      e => console.log(e),
      () => console.log('data received')
      );
  }

  ngOnDestroy() {
    if (this.courseListSubscription) {
      this.courseListSubscription.unsubscribe();
    }
  }
}
