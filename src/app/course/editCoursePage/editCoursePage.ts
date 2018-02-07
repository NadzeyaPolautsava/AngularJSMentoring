import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { DatePipe } from '@angular/common';
import { ICourse } from './../../interfaces/course';
import { CourseService } from './../../core/services/course.service';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AppConfig } from './../../config/appConfig';
import * as lodash from 'lodash'; 

@Component({
  selector: 'edit-course',
  templateUrl: './editCoursePage.html', 
  styleUrls: [], 
})
export class EditCoursePageComponent implements OnInit, OnDestroy {
    public currentCourse: ICourse;
    public courseId: any = {};
    private alive: boolean = true;
    public courseGroup: FormGroup;

    constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService, private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.route.params
        .takeWhile(() => this.alive)
        .subscribe((data) => {
            this.courseId = data['id'];
            console.log('courseId '+ this.courseId);
            this.courseService.getItemById(this.courseId)
                .takeWhile(() => this.alive)
                .subscribe(
                    x => {
                        this.currentCourse =lodash.head(x);
                        let datePipe = new DatePipe("en-US");
                        let dateValue = datePipe.transform(this.currentCourse.date, 'dd/MM/yyyy');
                        this.courseGroup = this.formBuilder.group({
                            course: this.formBuilder.group({
                                title: [this.currentCourse.title, [Validators.required, Validators.minLength(AppConfig.TITLE_MIN_LENGTH), Validators.maxLength(AppConfig.TITLE_MAX_LENGTH)]],
                                description: [this.currentCourse.description, [Validators.required, Validators.maxLength(AppConfig.DESCRIPTION_MAX_LENGTH)]], 
                                duration: [this.currentCourse.duration], 
                                date: [dateValue, [Validators.required] ], 
                                authors: []
                            })
                        });
                    }
                )
        });
    }

    updateCourse() {
        console.log('DURATION: ' + Number(this.courseGroup.get('course').get('duration').value));
        let createdDate = new Date(Date.parse(this.courseGroup.get('course').get('date').value));
        let c = {
            id: this.courseId, 
            title: this.courseGroup.get('course').get('title').value, 
            description: this.courseGroup.get('course').get('description').value, 
            duration: Number(this.courseGroup.get('course').get('duration').value), 
            date: createdDate, 
            topRated: false
        }
        this.courseService.updateItem(c)
            .takeWhile(() => this.alive)
            .subscribe(x => {
                console.log('Course Updated');
            });
        // debugger;
        this.router.navigateByUrl('courses');
    }

    cancel() {
        this.router.navigateByUrl('courses');
    }
    
    ngOnDestroy() {
        this.alive = false;
    }
}