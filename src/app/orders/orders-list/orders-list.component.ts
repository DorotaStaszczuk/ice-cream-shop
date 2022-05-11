import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersListComponent implements OnInit {
  role$ = this.store.select((state) => state.user.role);
  uid = this.authService.uid;
  user$ = this.firestoreService.getUserData(this.uid);
  currentDate = '';
  clients$ = this.firestoreService.getAllClients();

  constructor(
    private store: Store<AppState>,
    private firestoreService: FirestoreService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString();
  }

  public addNewOrder(name: string, amountCapacity: number, quantity: number) {
    const order = {
      flavorName: name,
      amountCapacity: amountCapacity,
      quantity: quantity,
    };
    this.firestoreService.addNewOrder(this.uid, order);
  }
}
