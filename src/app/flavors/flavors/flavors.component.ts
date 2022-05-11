import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.component.html',
  styleUrls: ['./flavors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlavorsComponent {
  constructor() {}
}
