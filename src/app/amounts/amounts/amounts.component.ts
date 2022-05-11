import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-amounts',
  templateUrl: './amounts.component.html',
  styleUrls: ['./amounts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmountsComponent {
  constructor() {}
}
