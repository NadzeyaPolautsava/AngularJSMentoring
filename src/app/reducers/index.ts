// import '@ngrx/core/add/operator/select';
// import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import userReducer, * as fromUser from './auth.reducer';
import { compose } from '@ngrx/store';

export interface AppState {
    user: fromUser.UserState;
};

export default compose(combineReducers) ({
    user: userReducer
});