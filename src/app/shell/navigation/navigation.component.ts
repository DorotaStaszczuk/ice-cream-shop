import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  role$ = this.store.select((state) => state.user.role);

  icemanRoutes = ['orders/', 'flavors/', 'amounts/', 'clients/'];
  icemanLinks = ['Zamówienia', 'Smaki', 'Jednostki', 'Klienci'];
  activeLinkIceman = this.icemanLinks[0];

  clientRoutes = ['orders/', 'flavors/', 'amounts/', 'clients/'];
  clientLinks = ['Zamówienia', ' Ulubione smaki'];
  activeLinkClient = this.clientLinks[0];

  background: ThemePalette = 'accent';

  constructor(private store: Store<AppState>) {}
}
