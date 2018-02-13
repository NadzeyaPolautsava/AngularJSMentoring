import { ActionWithPayload } from './../interfaces/actionWithPayload';
import { Observable } from 'rxjs/Observable';
import { ICourse } from './../interfaces/course';
import { CourseActions } from './../actions/courseActions';
import * as _ from 'lodash';
import { ActionReducer, Action } from '@ngrx/store';


const initialState: ICourse[] = [];

export const courseReducer: ActionReducer<ICourse[]> = (state = initialState, action: ActionWithPayload<ICourse[]>) => {
    switch (action.type) {
        case CourseActions.LOAD_COURSES_SUCCESS: {
            return action.payload;
        }
        case CourseActions.ADD_SUCCESS: {
            return [...action.payload];
        }
        case CourseActions.DELETE_SUCCESS: {
            return state.filter(course => {
                return course.id !== action.payload[0].id;
            });
        }
        default: {
            return state;
        }

    }
}