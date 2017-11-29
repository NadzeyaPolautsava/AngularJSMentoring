import {Component, Input, Output, EventEmitter} from '@angular/core'
import { Item } from './../../../../classes/item'

@Component({
  selector: 'course',
  providers: [],
  templateUrl: './course.html', 
  styleUrls: []
})
export class CourseComponent {
  @Input('init') course : Item = {
    duration: 0,
    title: '', 
    createdDate: new Date(), 
    description: '',
    id: 0
  };
  @Output('delete') courseDelete = new EventEmitter();
  constructor() {
  }

  deleteCourse() {
    this.courseDelete.emit({
      value: this.course.id
    })
  } 
}
