import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { ICourse } from './../../../interfaces/course';
import { CourseService } from './../../../core/services/course.service';
import { TitlePipe } from './../../../shared/pipes/title.pipe';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map'
import { Subscription } from 'rxjs/Subscription';
import { PagerService } from '../../../core/services/pager.service';

@Component({
  selector: 'course-list',
  providers: [],
  templateUrl: './courseList.html',
  styleUrls: ['./courseList.css']
})
export class CourseListComponent implements OnInit, OnDestroy {

  public courses: ICourse[] = [];
  private courseListSubscription: Subscription;
  pager: any = {};
  pagedItems: ICourse[];
  private coursesTotalCount: Number;

  constructor(private _courseService: CourseService, private pagerService: PagerService) {
  }

  ngOnInit() {
    let today: Date = new Date();
    let twoWeeksBefore = new Date(today.getDate() - 14);

    let totalCountSubscription =  this._courseService.getTotalCount()
      .subscribe(
        x => this.coursesTotalCount = x,
        e => console.log(e),
        () => {
          console.log('total count received ' + this.coursesTotalCount);
          totalCountSubscription.unsubscribe();
          this.fetchCourses(1);
        }
      );
  }

  deleteItem($event) {
    let deleteSubscription = this._courseService.removeItem($event.value)
      .subscribe(
        x => console.log(x),
        e => console.log(e),
        () => {
          deleteSubscription.unsubscribe(); // is it okay???????
          this.fetchCourses(this.pager.currentPage); // the same question :) 
      });
  }

  filter(title: string) {
    this.courses = new TitlePipe().transform(this._courseService.courses, title);
  }

  fetchCourses(page: number): void {
    if (this.courseListSubscription) {
      this.courseListSubscription.unsubscribe();
    }
    let today = new Date();
    let twoWeeksBefore = new Date();

    twoWeeksBefore.setDate(today.getDate() - 14);
    console.log('twoWeeksBefore: ' + twoWeeksBefore);
    this._courseService.getList(page)
      //.map(courses => courses.filter(course => (course.topRated)))
      .subscribe(
        x => {
          this.courses = x;
          console.log('Length: ' + x.length);
          this.setPage(page);
        },
        e => console.log(e),
        () => console.log('data received')
      );
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.coursesTotalCount.valueOf(), page);
    this.pagedItems = this.courses;
  }

  ngOnDestroy() {
    if (this.courseListSubscription) {
      this.courseListSubscription.unsubscribe();
    }
  }
}
