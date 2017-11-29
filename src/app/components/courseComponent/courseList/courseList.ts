import {Component} from '@angular/core'
import { Item } from './../../../classes/item'

@Component({
  selector: 'course-list',
  providers: [],
  templateUrl: './courseList.html', 
  styleUrls: []
})
export class CourseListComponent {

  public courses: Item[] = [
    { id: 1, duration: 100, title: 'Some Video', createdDate: new Date(), description: 'description'}, 
    { id: 2, duration: 200, title: 'Some Video2', createdDate: new Date(), description: 'description2'}, 
  ];

  constructor() {
  }

  deleteItem($event) {
    console.log($event);
  }
}
