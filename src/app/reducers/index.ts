import { combineReducers } from '@ngrx/store';

import userReducer, * as fromUser from './auth.reducer';
import { compose } from '@ngrx/store';

export interface AppState {
    user: fromUser.UserState;
};

export default compose(combineReducers) ({
    user: userReducer
});