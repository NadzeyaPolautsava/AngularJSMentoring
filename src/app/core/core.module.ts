import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { CourseService } from './services/course.service';


@NgModule({
  imports: [ HttpClientModule ],
  declarations: [], 
  exports: [], 
  providers: [
    AuthService, 
    CourseService
  ]

})
export class CoreModule { }
