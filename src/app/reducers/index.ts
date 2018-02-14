import { combineReducers } from '@ngrx/store';

import userReducer, * as fromUser from './auth.reducer';
import courseReducer, * as fromCourse from './course.reducer';
import { compose } from '@ngrx/store';
import { IUser } from './../interfaces/user';
import { ICourse } from './../interfaces/course';
import { ActionWithPayload } from './../interfaces/actionWithPayload';

export interface AppState {
    user: IUser;
    courses: ICourse[]
};

export default compose(combineReducers) ({
    user: userReducer,
    courses: courseReducer
});


export type Actions =
    | ActionWithPayload<ICourse[]>
    | ActionWithPayload<IUser>
