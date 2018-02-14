import { Routes } from '@angular/router';

import { DataResolver } from './app.resolver';
import { CoursesPageComponent } from './course/coursesPage/coursesPage';
import { AddCoursePageComponent } from './course/addCoursePage/addCoursePage';
import { LoginPageComponent } from './login/loginPage/loginPage';
import { NoContentComponent } from './shared/components/noContent/noContent';
import { CanActivateGuard } from './core/services/canActivateGuard';
import { EditCoursePageComponent } from './course/editCoursePage/editCoursePage';


export const ROUTES: Routes = [
    {
        path: '',
        component:  LoginPageComponent, 
        data: {
            breadcrumb: "Login"
        }
    },
    { 
        path: 'courses',
        component:  CoursesPageComponent, 
        data: {
            breadcrumb: "Courses"
        }
    }, 
    { 
        path: 'courses/new',
        component:  AddCoursePageComponent,
        // canActivate: [CanActivateGuard], 
        data: {
            breadcrumb: "New Course"
        } 
    },
    { 
        path: 'courses/:id',
        component:  EditCoursePageComponent,
        // canActivate: [CanActivateGuard] 
    }, 
 
    { 
        path: 'login',
        component:  LoginPageComponent 
    }, 
    // { 
    //     path: '**',
    //     component:  NoContentComponent 
    // }, 

];
