import { Component, OnInit, Input } from '@angular/core'
import { ICourse } from './../../../interfaces/course';
import { CourseService } from  './../../../core/services/course.service';
import { TitlePipe } from './../../../shared/pipes/title.pipe';

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
    let subscription = this._courseService.getList().subscribe(
        x => this.courses = x, 
        e => console.log(e), 
        () => console.log('data received')
    );
    subscription.unsubscribe();
  }

  deleteItem($event) {
    this._courseService.removeItem($event.value);
  }

  filter(title: string) {
    this.courses = new TitlePipe().transform(this._courseService.courses, title);
  }
}
