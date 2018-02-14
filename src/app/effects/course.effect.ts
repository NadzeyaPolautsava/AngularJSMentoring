import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ActionWithPayload } from './../interfaces/actionWithPayload'; 

import { CourseActions } from './../actions/courseActions';
import { CourseService } from './../core/services/course.service';
import { ICourse } from './../interfaces/course';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class CourseEffects {
    constructor (
        private update$: Actions,
        private courseActions: CourseActions,
        private courseService: CourseService
    ) {}

    @Effect() loadCourses$: Observable<Action> = this.update$
        .ofType(CourseActions.LOAD_COURSES)
        .switchMap(() => this.courseService.getList(0))
        .map(courses => this.courseActions.loadCoursesSuccess(courses));
}