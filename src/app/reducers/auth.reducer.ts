import { ActionWithPayload } from './../interfaces/actionWithPayload';
import { Observable } from 'rxjs/Observable';
import { IUser } from './../interfaces/user';
import { UserActions } from './../actions/userActions';
import * as _ from 'lodash';
import { ActionReducer, Action } from '@ngrx/store';

export type Actions =
    | ActionWithPayload<IUser>
// export type UserState = IUser;
const initialState: IUser = { username: "", password: "", token: ""};


export const userReducer: ActionReducer<IUser> = (state = initialState, action: ActionWithPayload<IUser>) => {
    switch (action.type) {
        case UserActions.LOGIN_SUCCESS: {
            return { ...action.payload };
        }
        case UserActions.LOGOUT: {
            return {
                ...state,
                ...{ username: "", password: "", token: "" }
            };
        }
        default: {
            return state;
        }

    }
}