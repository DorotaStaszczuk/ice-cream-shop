import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Amount } from 'src/app/shared/models';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-amounts-list',
  templateUrl: './amounts-list.component.html',
  styleUrls: ['./amounts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmountsListComponent {
  clients: any;
  user$ = this.firestoreService.getUserData(this.authService.uid);
  constructor(
    private firestoreService: FirestoreService,
    private authService: AuthService
  ) {}

  public deleteAmount(amount: Amount) {
    console.log('amount', amount);
    this.firestoreService.deleteAmount(amount);
  }
}
