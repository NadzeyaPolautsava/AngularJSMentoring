import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { CourseService } from './services/course.service';


@NgModule({
  imports: [],
  declarations: [], 
  exports: [], 
  providers: [
    AuthService, 
    CourseService
  ]

})
export class CoreModule { }
