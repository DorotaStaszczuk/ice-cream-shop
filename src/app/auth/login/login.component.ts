import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  emailControl = new FormControl('');
  passwordControl = new FormControl('');

  constructor(private authService: AuthService) {}

  public onSubmit() {
    const userEmail: string = this.emailControl.value;
    const userPassword: string = this.passwordControl.value;

    this.authService.onLogin(userEmail, userPassword);
  }
}
