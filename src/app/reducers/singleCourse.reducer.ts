import { ActionWithPayload } from './../interfaces/actionWithPayload';
import { Observable } from 'rxjs/Observable';
import { ICourse } from './../interfaces/course';
import { CourseActions } from './../actions/courseActions';
import * as _ from 'lodash';
import { ActionReducer, Action } from '@ngrx/store';


const initialState: ICourse[] = [];

export const courseReducer: ActionReducer<ICourse[]> = (state = initialState, action: ActionWithPayload<ICourse[]>) => {
    switch (action.type) {
        default: {
            return state;
        }

    }
}