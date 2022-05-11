import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/shared/models';

export const setOrders = createAction(
  '[Orders] set orders',
  props<{ todayOrders: Order[] }>()
);
