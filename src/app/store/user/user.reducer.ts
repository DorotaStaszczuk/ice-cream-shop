import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { UserState } from './user.state';

const initialState: UserState = {
  userName: '',
  uid: '',
  role: '',
  userEmail: '',
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.setUserData, (state, props) => {
    return {
      ...state,
      userName: props.userName,
      uid: props.uid,
      role: props.role,
      userEmail: props.userEmail,
    };
  }),
  on(UserActions.resetUser, (state) => {
    return {
      ...state,
      ...initialState,
    };
  })
);
