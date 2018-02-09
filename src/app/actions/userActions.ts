import { IUser } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ActionWithPayload } from './../interfaces/actionWithPayload';

@Injectable()
export class UserActions {
    static readonly LOGIN = 'LOGIN';
    login(user: IUser): ActionWithPayload<IUser> {
        return {
            type: UserActions.LOGIN, 
            payload: user
        };
    }

    static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    loginSuccess(user: IUser): ActionWithPayload<IUser> {
        return {
            type: UserActions.LOGIN_SUCCESS,
            payload: user
        };
    }

    static readonly LOGOUT = 'LOGOUT';
    logout(): ActionWithPayload<IUser> {
        return {
            type: UserActions.LOGOUT
        };
    }  
  }