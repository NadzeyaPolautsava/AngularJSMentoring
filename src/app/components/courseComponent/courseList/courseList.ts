import {Component} from '@angular/core'
import { Item } from './../../../classes/item'

@Component({
  selector: 'course-list',
  providers: [],
  templateUrl: './courseList.html', 
  styleUrls: []
})
export class CourseListComponent {

  public course: Item = {
    duration: 100,
    title: 'Some Video', 
    createdDate: new Date(), 
    description: 'description',
    id: 1
  };

  constructor() {
  }

  deleteItem($event) {
    console.log($event);
  }
}
