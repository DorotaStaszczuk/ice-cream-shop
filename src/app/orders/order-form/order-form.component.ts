import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFormComponent implements OnInit {
  role$ = this.store.select((state) => state.user.role);
  uid = this.authService.uid;
  iceman$ = this.firestoreService.getIcemanData();
  user$ = this.firestoreService.getUserData(this.uid);

  flavorControl = new FormControl('');
  amountControl = new FormControl('');
  quantityControl = new FormControl('');

  currentDate = '';
  constructor(
    private store: Store<AppState>,
    private firestoreService: FirestoreService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString();
  }

  public onSubmit() {
    const flavor = this.flavorControl.value;
    const amount = this.amountControl.value.amountCapacity;
    const quantity = this.quantityControl.value;
    const order = {
      flavorName: flavor,
      amountCapacity: amount,
      quantity: quantity,
    };

    if (flavor && amount && quantity) {
      this.firestoreService.addNewOrder(this.uid, order);
      alert('Zamówienie zostało złożone');
    } else if (quantity === 0) {
      alert('Nie można dodać zerowej ilości');
    }
  }
}
