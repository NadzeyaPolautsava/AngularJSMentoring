import { ActionReducer, Action } from '@ngrx/store';
import { IUser } from './../../../interfaces/user';

export const LOGIN = 'login';
export const LOGOUT = 'logout';

export function authReducer(
    user: IUser = null,
    action: Action
): ActionReducer<IUser> {
    switch(action.type) {
        case LOGIN: {
            return null;
        }

        case LOGOUT:
            return null;
        default:
            return null;
    }
}