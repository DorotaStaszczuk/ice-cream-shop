import { createAction, props } from '@ngrx/store';
import { UserState } from './user.state';

export const UserActions = {
  setUserData: createAction('[User] set user data', props<UserState>()),
  resetUser: createAction('[User] reset user'),
};
