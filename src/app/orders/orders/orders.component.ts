import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { UserState } from 'src/app/store/user';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  user$!: Observable<UserState | undefined>;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.user$! = this.authService.setUserData(
      this.authService.uid,
      this.authService.email
    );
  }
}
