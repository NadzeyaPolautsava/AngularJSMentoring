import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { ICourse } from './../../../interfaces/course';
import { CourseService } from './../../../core/services/course.service';
import { TitlePipe } from './../../../shared/pipes/title.pipe';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/takeWhile';
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
  pager: any = {};
  pagedItems: ICourse[] = [];
  private coursesTotalCount: Number;
  private searchTitle: string;
  private alive: boolean = true;

  constructor(private _courseService: CourseService, private pagerService: PagerService) {
  }

  ngOnInit() {
    let today: Date = new Date();
    let twoWeeksBefore = new Date(today.getDate() - 14);

    let totalCountSubscription = this._courseService.getTotalCount()
      .subscribe(
      x => this.coursesTotalCount = x,
      e => console.log(e),
      () => {
        console.log('total count received ' + this.coursesTotalCount);
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
        
        this.fetchCourses(this.pager.currentPage); // the same question :) 
      });
  }

  filter(title: string) {
    // this.courses = new TitlePipe().transform(this._courseService.courses, title);
    this.searchTitle = title;
    this.fetchCourses(this.pager.currentPage, title);
  }

  fetchCourses(page: number, title?: string): void {
    let today = new Date();
    let twoWeeksBefore = new Date();

    twoWeeksBefore.setDate(today.getDate() - 14);
    console.log('twoWeeksBefore: ' + twoWeeksBefore);
    let query = title ? title : this.searchTitle;
    console.log('QUERY: ' + query);
    if (query) {
      let courseListSubscription = this._courseService.find(page, query)
      // .map(courses => courses.filter(course => (course.topRated)))
      .takeWhile(() => this.alive)
      .subscribe(
      x => {
        this.courses = x;
        console.log('Length: ' + x.length);
        this.setPage(page);
      },
        e => console.log(e),
       () => console.log('data received')
      );
    } else {
      let courseListSubscription = this._courseService.getList(page)
        // .map(courses => courses.filter(course => (new Date(course.date) > twoWeeksBefore)))
        .takeWhile(() => this.alive)
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
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.coursesTotalCount.valueOf(), page);
    this.pagedItems = this.courses;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
