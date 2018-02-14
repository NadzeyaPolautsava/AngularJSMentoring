import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ActionWithPayload } from './../interfaces/actionWithPayload'; 

import { UserActions } from './../actions/userActions';
import { AuthService } from './../core/services/auth.service';
import { IUser } from './../interfaces/user';
import 'rxjs/add/operator/switchMap';



@Injectable()
export class UserEffects {
    constructor (
        private update$: Actions,
        private userActions: UserActions,
        private authService: AuthService
    ) {}

    @Effect() login$ = this.update$
        .ofType(UserActions.LOGIN)
        .map(action => action as ActionWithPayload<IUser>)
        .map(action => action.payload)
        .switchMap(user => this.authService.login(user.username, user.password))
        .map(user => this.userActions.loginSuccess(user));
}