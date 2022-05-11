import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-amount-form',
  templateUrl: './amount-form.component.html',
  styleUrls: ['./amount-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmountFormComponent {
  amountNameControl = new FormControl('');
  amountCapacityControl = new FormControl('');

  constructor(private firestoreService: FirestoreService) {}

  public addNewAmount() {
    const name = this.amountNameControl.value;
    const capacity = this.amountCapacityControl.value;
    this.firestoreService.addNewAmount(name, capacity);
    this.amountNameControl.reset();
    this.amountCapacityControl.reset();
  }
}
