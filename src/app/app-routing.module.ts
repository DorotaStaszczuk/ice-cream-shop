import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { OrdersComponent } from './orders/orders/orders.component';
import { FlavorsComponent } from './flavors/flavors/flavors.component';
import { ClientsComponent } from './clients/clients/clients.component';
import { AmountsComponent } from './amounts/amounts/amounts.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'flavors',
    component: FlavorsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'amounts',
    component: AmountsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'orders',
  },
  {
    path: '**',
    redirectTo: 'orders',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
