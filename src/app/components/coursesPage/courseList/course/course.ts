import {Component, Input, Output, EventEmitter} from '@angular/core'
import { Item } from './../../../../classes/item'
import { Course } from './../../../../interfaces/course'

@Component({
  selector: 'course',
  providers: [],
  templateUrl: './course.html', 
  styleUrls: ['./course.css']
})
export class CourseComponent implements Course {
  duration: number;
  title: string;
  createdDate: Date;
  description: string;
  id: number;

  @Input('init') course : Course = {
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
