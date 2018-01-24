import { Component, OnInit } from '@angular/core'
import { CourseListComponent } from './courseList/courseList';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { CustomValidators } from './../../core/validation/customVallidators';


@Component({
  selector: 'add-course-page',
  providers: [],
  templateUrl: './addCoursePage.html', 
  styleUrls: [ './addCoursePage.css' ]
})
export class AddCoursePageComponent implements OnInit{
  
  public title: string = '';
  public courseGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.courseGroup = this.formBuilder.group({
        course: this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            description: [null, [Validators.required, Validators.maxLength(500)]], 
            duration: [null, [Validators.required]], 
            date: [null, [Validators.required] ]
        })
    });

    this.courseGroup.valueChanges.subscribe(value => console.log(value))
}

  saveCourse(form) {
    console.log('save called');
  }

  cancel() {
    console.log('cancel called');
  }
}
