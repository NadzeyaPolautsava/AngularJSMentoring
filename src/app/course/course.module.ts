import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }        from './../shared/shared.module';

import { CourseComponent } from './coursesPage/courseList/course';
import { CourseListComponent } from './coursesPage/courseList';
import { ActionBarComponent } from './coursesPage/actionBar';
import { AddCourseComponent } from './coursesPage/actionBar/addCourse';
import { SearchComponent } from './coursesPage/actionBar/search';
import { CoursesPageComponent } from './coursesPage/coursesPage';

import { CourseService } from './services/course.service'

@NgModule({
  imports: [ SharedModule, CommonModule ],
  declarations: [
        CourseComponent, 
        CourseListComponent, 
        ActionBarComponent, 
        AddCourseComponent,
        SearchComponent, 
        CoursesPageComponent
  ], 
  exports: [
    CoursesPageComponent
  ], 
  providers: [
    CourseService
  ]
})
export class CourseModule { }
