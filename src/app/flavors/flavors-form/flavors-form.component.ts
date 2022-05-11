import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-flavors-form',
  templateUrl: './flavors-form.component.html',
  styleUrls: ['./flavors-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlavorsFormComponent {
  role$ = this.store.select((state) => state.user.role);
  uid = this.authService.uid;
  user$ = this.firestoreService.getIcemanData();
  flavorControl = new FormControl('');
  favoriteFlavorControl = new FormControl('');

  constructor(
    private firestoreService: FirestoreService,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  public addNewFlavor() {
    this.firestoreService.addNewFlavor(this.flavorControl.value);
    this.flavorControl.reset();
  }

  public addNewFavoriteFlavor() {
    this.firestoreService.addNewFavoriteFlavor(
      this.favoriteFlavorControl.value,
      this.uid
    );
    this.favoriteFlavorControl.reset();
  }
}
