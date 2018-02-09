import { combineReducers } from '@ngrx/store';

import userReducer, * as fromUser from './auth.reducer';
import { compose } from '@ngrx/store';
import { IUser } from './../interfaces/user';

export interface AppState {
    user: IUser;
};

export default compose(combineReducers) ({
    user: userReducer
});