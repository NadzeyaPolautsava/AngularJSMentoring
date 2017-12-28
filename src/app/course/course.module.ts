import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseComponent } from './coursesPage/courseList/course';
import { CourseListComponent } from './coursesPage/courseList';
import { ActionBarComponent } from './coursesPage/actionBar';
import { AddCourseComponent } from './coursesPage/actionBar/addCourse';
import { SearchComponent } from './coursesPage/actionBar/search';
import { CoursesPageComponent } from './coursesPage/coursesPage';
import { AddCoursePageComponent } from './addCoursePage/addCoursePage';
import { CreatedDateInputComponent } from './addCoursePage/createdDateInput/createdDateInput';
import { DurationInputComponent } from './addCoursePage/durationInput/durationInput';
import { SelectAuthorsComponent } from './addCoursePage/selectAuthors/selectAuthors';

import { CourseService } from './../core/services/course.service';

import { HighlightBorderDirective } from './directives/highlightBorder.directive'

import { SharedModule } from './../shared/shared.module';


@NgModule({
  imports: [ CommonModule, SharedModule ],
  declarations: [
        CourseComponent, 
        CourseListComponent, 
        ActionBarComponent, 
        AddCourseComponent,
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
    AddCoursePageComponent
  ], 
  providers: [
    CourseService
  ]
})
export class CourseModule { }
