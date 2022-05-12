import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-flavors-list',
  templateUrl: './flavors-list.component.html',
  styleUrls: ['./flavors-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlavorsListComponent {
  user$ = this.firestoreService.getUserData(this.authService.uid);
  role$ = this.store.select((state) => state.user.role);
  uid = this.authService.uid;

  constructor(
    private firestoreService: FirestoreService,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  public deleteFlavor(flName: string) {
    this.firestoreService.deleteFlavor(flName);
  }

  public deleteFavoriteFlavor(flName: string) {
    this.firestoreService.deleteFavoriteFlavor(flName, this.uid);
  }
}
