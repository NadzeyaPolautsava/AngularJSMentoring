import { ICourse } from './../interfaces/course';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ActionWithPayload } from './../interfaces/actionWithPayload';

@Injectable()
export class CourseActions {
    static readonly ADD = 'ADD';
    addCourse(course: ICourse): ActionWithPayload<ICourse> {
        return {
            type: CourseActions.ADD, 
            payload: course
        };
    }

    static readonly ADD_SUCCESS = 'ADD_SUCCESS';
    addCourseSuccess(course: ICourse): ActionWithPayload<ICourse> {
        return {
            type: CourseActions.ADD_SUCCESS, 
            payload: course
        };
    }

    static readonly DELETE = 'DELETE';
    deleteCourse(course: ICourse): ActionWithPayload<ICourse> {
        return {
            type: CourseActions.DELETE, 
            payload: course
        };
    }

    static readonly DELETE_SUCCESS = 'DELETE_SUCCESS';
    deleteCourseSuccess(course: ICourse): ActionWithPayload<ICourse> {
        return {
            type: CourseActions.DELETE_SUCCESS, 
            payload: course
        };
    }

    static LOAD_COURSES = 'LOAD_COURSES';
    loadCourses(): ActionWithPayload<ICourse[]> {
        return {
            type: CourseActions.LOAD_COURSES
        };
    }

    static LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
    loadCoursesSuccess(courses): ActionWithPayload<ICourse[]> {
        return {
            type: CourseActions.LOAD_COURSES_SUCCESS, 
            payload: courses
        };
    }
  }