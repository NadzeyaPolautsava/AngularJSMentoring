import { Component, OnInit } from '@angular/core'
import { CourseListComponent } from './courseList/courseList';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { CustomValidators } from './../../core/validation/customVallidators';
import { Router } from '@angular/router'
import { CourseService } from './../../core/services/course.service';
import { CourseAuthorService } from './../../core/services/courseAuthor.service';
import { AppConfig } from './../../config/appConfig';
import { AppState } from './../../reducers/';
import { Store } from '@ngrx/store';
import { CourseActions } from './../../actions/courseActions';


@Component({
  selector: 'add-course-page',
  providers: [],
  templateUrl: './addCoursePage.html',
  styleUrls: ['./addCoursePage.css']
})
export class AddCoursePageComponent implements OnInit {

  public static TITLE_MIN_LENGTH = 3;


  public title: string = '';
  public courseGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private courseService: CourseService,
              private courseAuthorService: CourseAuthorService, 
              private store: Store<AppState>, 
              private courseActions: CourseActions
            ) {
  }

  ngOnInit() {
    this.courseGroup = this.formBuilder.group({
      course: this.formBuilder.group({
        title: ['', [Validators.required, Validators.minLength(AppConfig.TITLE_MIN_LENGTH), Validators.maxLength(50)]],
        description: [null, [Validators.required, Validators.maxLength(AppConfig.DESCRIPTION_MAX_LENGTH)]],
        duration: [null, [Validators.required]],
        date: [null, [Validators.required]],
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
        let authors = this.courseGroup.get('course').get('authors').value
        for (let i = 0; i < authors.length; i++) {
          let authorId = authors[i].id;
          this.courseAuthorService.save(x.id, authorId);
          // console.log('Authors Id' + authorId);
        }
        this.store.dispatch(this.courseActions.addCourseSuccess(x));
        console.log('Authors ' + authors);
        this.store.dispatch(this.courseActions.addCourseSuccess(x));
      })
    this.router.navigateByUrl('/courses');
  }

  cancel() {
    this.router.navigateByUrl('/courses');
  }
}
