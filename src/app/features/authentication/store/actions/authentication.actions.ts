import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../access-management/types/user.interface';

export const signIn = createAction('[Authentication] Sign in', props<{ userName: string, password: string }>());
export const signInFail = createAction('[Authentication] Sign in fail', props<{ error: HttpErrorResponse }>());
export const signInSuccess = createAction('[Authentication] Sign in success', props<{ user: User, token: string }>());
