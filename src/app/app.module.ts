import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { NavigationComponent } from './shell/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrderFormComponent } from './orders/order-form/order-form.component';
import { FlavorsListComponent } from './flavors/flavors-list/flavors-list.component';
import { FlavorsFormComponent } from './flavors/flavors-form/flavors-form.component';
import { AmountsListComponent } from './amounts/amounts-list/amounts-list.component';
import { AmountFormComponent } from './amounts/amount-form/amount-form.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { ClientFormComponent } from './clients/client-form/client-form.component';
import { ClientsComponent } from './clients/clients/clients.component';
import { FlavorsComponent } from './flavors/flavors/flavors.component';
import { OrdersComponent } from './orders/orders/orders.component';
import { AmountsComponent } from './amounts/amounts/amounts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ListItemComponent } from './shared/list-item/list-item.component';
import { AuthService } from './auth/auth.service';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth';
import { userReducer } from './store/user/user.reducer';
import { AppState } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ordersReducer } from './store/orders';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
    NavigationComponent,
    OrdersListComponent,
    OrderFormComponent,
    FlavorsListComponent,
    FlavorsFormComponent,
    AmountsListComponent,
    AmountFormComponent,
    ClientsListComponent,
    ClientFormComponent,
    ClientsComponent,
    FlavorsComponent,
    OrdersComponent,
    AmountsComponent,
    LoginComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    StoreModule.forRoot<AppState>({
      auth: authReducer,
      user: userReducer,
      orders: ordersReducer,
    }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
