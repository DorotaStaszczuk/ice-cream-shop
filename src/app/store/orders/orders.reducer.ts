import { OrdersState } from './orders.state';
import { createReducer, on } from '@ngrx/store';
import { setOrders } from './orders.actions';

const initialState: OrdersState = {
  todayOrders: [],
};

export const ordersReducer = createReducer(
  initialState,
  on(setOrders, (state, { todayOrders }) => {
    return {
      ...state,
      todayOrders: todayOrders,
    };
  })
);
