import {
  Component, EventEmitter, Input, Output,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange
} from '@angular/core'
import { Item } from './../../../../classes/item'
import { Course } from './../../../../interfaces/course'

@Component({
  selector: 'course',
  providers: [],
  templateUrl: './course.html', 
  styleUrls: ['./course.css']
})
export class CourseComponent implements
            Course, 
            OnChanges, OnInit, DoCheck,
            AfterContentInit, AfterContentChecked,
            AfterViewInit, AfterViewChecked,
            OnDestroy {
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

  ngOnInit() {
    console.log(`ngOnInit for ${this.course.id}`)
  }
  
  
  ngOnChanges() {
    console.log(`ngOnChanges for ${this.course.id}`);
  }

  ngDoCheck() { 
    console.log(`ngDoCheck for ${this.course.id}`); 
  }

  ngAfterContentInit() { 
    console.log(`ngAfterContentInit for ${this.course.id}`);  
  }

  ngAfterContentChecked() { 
    console.log(`ngAfterContentChecked for ${this.course.id}`);
  }

  ngAfterViewInit() { 
    console.log(`ngAfterViewInit for ${this.course.id}`);
  }

  ngAfterViewChecked() { 
    console.log(`ngAfterViewChecked for ${this.course.id}`);
  }

  ngOnDestroy() { 
    console.log(`ngOnDestroy for ${this.course.id}`);
  }
}
