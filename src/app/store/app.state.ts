import { AuthState } from './auth';
import { OrdersState } from './orders/orders.state';
import { UserState } from './user/user.state';

export interface AppState {
  user: UserState;
  auth: AuthState;
  orders: OrdersState;
}
