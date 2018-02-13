import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CourseComponent } from './coursesPage/courseList/course';
import { CourseListComponent } from './coursesPage/courseList';
import { ActionBarComponent } from './coursesPage/actionBar';
import { AddCourseComponent } from './coursesPage/actionBar/addCourse';
import { SearchComponent } from './coursesPage/actionBar/search';
import { CoursesPageComponent } from './coursesPage/coursesPage';
import { AddCoursePageComponent } from './addCoursePage/addCoursePage';
import { EditCoursePageComponent } from './editCoursePage/editCoursePage';
import { CreatedDateInputComponent } from './addCoursePage/createdDateInput/createdDateInput';
import { DurationInputComponent } from './addCoursePage/durationInput/durationInput';
import { SelectAuthorsComponent } from './addCoursePage/selectAuthors/selectAuthors';

import { CourseService } from './../core/services/course.service';

import { HighlightBorderDirective } from './directives/highlightBorder.directive'

import { SharedModule } from './../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { CourseActions } from './../actions/courseActions';
import reducers  from './../reducers'
import { CourseEffects } from './../effects/course.effect';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  imports: [ 
    CommonModule, 
    SharedModule, 
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule,
    StoreModule.forRoot(reducers), 
    // EffectsModule.run(CourseEffects)
  ],
  declarations: [
        CourseComponent, 
        CourseListComponent, 
        ActionBarComponent, 
        AddCourseComponent,
        EditCoursePageComponent, 
        SearchComponent, 
        CoursesPageComponent,
        AddCoursePageComponent, 
        CreatedDateInputComponent, 
        DurationInputComponent, 
        SelectAuthorsComponent,     

        HighlightBorderDirective
  ], 
  exports: [
    CoursesPageComponent, 
    AddCoursePageComponent, 
    EditCoursePageComponent
  ], 
  providers: [
    CourseService, 
    CourseActions, 
  ]
})
export class CourseModule { }
