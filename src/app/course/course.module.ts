import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseComponent } from './coursesPage/courseList/course';
import { CourseListComponent } from './coursesPage/courseList';
import { ActionBarComponent } from './coursesPage/actionBar';
import { AddCourseComponent } from './coursesPage/actionBar/addCourse';
import { SearchComponent } from './coursesPage/actionBar/search';
import { CoursesPageComponent } from './coursesPage/coursesPage';

import { CourseService } from './../core/services/course.service';

import { HighlightBorderDirective } from './directives/highlightBorder.directive'

import { DurationPipe } from './pipes/duration.pipe';
import { TitlePipe } from './pipes/title.pipe'; 

@NgModule({
  imports: [ CommonModule ],
  declarations: [
        CourseComponent, 
        CourseListComponent, 
        ActionBarComponent, 
        AddCourseComponent,
        SearchComponent, 
        CoursesPageComponent, 
        HighlightBorderDirective, 
        DurationPipe, 
        TitlePipe
  ], 
  exports: [
    CoursesPageComponent
  ], 
  providers: [
    CourseService
  ]
})
export class CourseModule { }
