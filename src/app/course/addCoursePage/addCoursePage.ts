import { Component, OnInit } from '@angular/core'
import { CourseListComponent } from './courseList/courseList';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { CustomValidators } from './../../core/validation/customVallidators';
import { Router } from '@angular/router'
import { CourseService } from './../../core/services/course.service';
import { AppConfig } from './../../config/appConfig';


@Component({
  selector: 'add-course-page',
  providers: [],
  templateUrl: './addCoursePage.html', 
  styleUrls: [ './addCoursePage.css' ]
})
export class AddCoursePageComponent implements OnInit{
  
  public static TITLE_MIN_LENGTH = 3;


  public title: string = '';
  public courseGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private courseService: CourseService) {
  }

  ngOnInit() {
    this.courseGroup = this.formBuilder.group({
        course: this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(AppConfig.TITLE_MIN_LENGTH), Validators.maxLength(50)]],
            description: [null, [Validators.required, Validators.maxLength(AppConfig.DESCRIPTION_MAX_LENGTH)]], 
            duration: [null, [Validators.required]], 
            date: [null, [Validators.required] ], 
            authors: [null]
        })
    });

    this.courseGroup.valueChanges.subscribe(value => console.log(value))
}

  saveCourse(form) {
    console.log('save called');
    this.courseService.createCourse(this.courseGroup.get('course').get('duration').value, 
                                    this.courseGroup.get('course').get('title').value, 
                                    this.courseGroup.get('course').get('date').value,
                                    this.courseGroup.get('course').get('description').value)
                                    .subscribe(x => {
                                      console.log('Object ' + x.id);
                                    })
    this.router.navigateByUrl('/courses');
  }

  cancel() {
    this.router.navigateByUrl('/courses');
  }
}
