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
  SimpleChange, 
  ChangeDetectionStrategy
} from '@angular/core'
import { Item } from './../../../../classes/item'
import { ICourse } from './../../../../interfaces/course'

@Component({
  selector: 'course',
  providers: [],
  templateUrl: './course.html', 
  styleUrls: ['./course.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements
            ICourse, 
            OnChanges, OnInit, DoCheck,
            AfterContentInit, AfterContentChecked,
            AfterViewInit, AfterViewChecked,
            OnDestroy {
  duration: number;
  title: string;
  date: Date;
  description: string;
  topRated: boolean;
  id: number;

  @Input('init') course : ICourse = {
    duration: 0,
    title: '', 
    date: new Date(), 
    description: '',
    topRated: false, 
    id: 0
  };
  
  @Output('delete') courseDelete = new EventEmitter();
  constructor() {
  }

  deleteCourse() {
    if (confirm("Are you sure?")) {
      this.courseDelete.emit({
        value: this.course.id

      })
    }
  } 

  ngOnInit() {
  }
  
  
  ngOnChanges() {
  }

  ngDoCheck() { 
  }

  ngAfterContentInit() { 
  }

  ngAfterContentChecked() { 
  }

  ngAfterViewInit() { 
  }

  ngAfterViewChecked() { 
  }

  ngOnDestroy() { 
  }
}
