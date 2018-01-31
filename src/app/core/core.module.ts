import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { CourseService } from './services/course.service';
import { PagerService } from './services/pager.service';
import { AuthorService } from './services/author.service';


@NgModule({
  imports: [ HttpClientModule ],
  declarations: [], 
  exports: [], 
  providers: [
    AuthService, 
    CourseService, 
    PagerService, 
    AuthorService
  ]

})
export class CoreModule { }
