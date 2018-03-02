import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { DatePipe } from '@angular/common';
import { ICourse } from './../../interfaces/course';
import { ICourseAuthor } from './../../interfaces/courseAuthor';
import { CourseService } from './../../core/services/course.service';
import { CourseAuthorService } from './../../core/services/courseAuthor.service';
import { AuthorService } from './../../core/services/author.service';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AppConfig } from './../../config/appConfig';
import * as lodash from 'lodash'; 
import { IAuthor } from './../../interfaces/author';
import { AppState } from './../../reducers/';
import { Store } from '@ngrx/store';
import { CourseActions } from './../../actions/courseActions';


@Component({
  selector: 'edit-course',
  templateUrl: './editCoursePage.html', 
  styleUrls: [], 
})
export class EditCoursePageComponent implements OnInit, OnDestroy {
    public currentCourse: ICourse;
    public courseAuthors: Array<ICourseAuthor> = [];
    public courseId: any = {};
    private alive: boolean = true;
    public courseGroup: FormGroup;
    public selectedAuthors: Array<IAuthor> = [];

    constructor(private route: ActivatedRoute, 
                private router: Router, 
                private courseService: CourseService, 
                private courseAuthorService: CourseAuthorService,
                private authorService: AuthorService, 
                private formBuilder: FormBuilder, 
                private store: Store<AppState>, 
                private courseActions: CourseActions
            ) {

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
                        this.currentCourse = lodash.head(x);
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
                );
            this.courseAuthorService.fetchForCourse(this.courseId)
                .takeWhile(() => this.alive)
                .subscribe(
                    x => {
                        this.courseAuthors = x;
                        if (this.courseAuthors) {
                            this.authorService.getList()
                                .takeWhile(() => this.alive)
                                .subscribe((data) => {
                                    for (let i = 0; i < data.length; i++) {
                                        console.log('FILTER: ' + this.courseAuthors.filter(e => e.authorId === data[i].id));
                                        if (this.courseAuthors.filter(e => e.authorId === data[i].id).length > 0) {
                                            this.selectedAuthors.push(data[i]);
                                            console.log('PUSHED');
                                        }
                                    }
                                    this.courseGroup.get('course').get('authors').setValue(this.selectedAuthors);
                                    console.log('my authors: ' + this.selectedAuthors);
                                })
                        }
                        // console.log('X:' + x[0].authorId);
                    }
                
                );
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
                this.store.dispatch(this.courseActions.updateCourseSuccess(c));
            });
        if (this.courseAuthors) {
            for (let i = 0; i < this.courseAuthors.length; i++) {
                this.courseAuthorService.remove(this.courseAuthors[i].id);
            }
        }
        
        
        let authors = this.courseGroup.get('course').get('authors').value;
        for (let i = 0; i < authors.length; i++) {
            this.courseAuthorService.save(this.courseId, authors[i].id);
            
        }

        this.router.navigateByUrl('courses');
    }

    cancel() {
        this.router.navigateByUrl('courses');
    }
    
    ngOnDestroy() {
        this.alive = false;
    }
}