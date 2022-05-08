import { AuthState } from './auth';
import { UserState } from './user/user.state';

export interface AppState {
  user: UserState;
  auth: AuthState;
}
