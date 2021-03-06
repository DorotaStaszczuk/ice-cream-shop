import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent {
  userNameControl = new FormControl('');
  userEmailControl = new FormControl('');
  userPasswordControl = new FormControl('');

  constructor(private authService: AuthService) {}

  onSignup() {
    const name = this.userNameControl.value;
    const email = this.userEmailControl.value;
    const password = this.userPasswordControl.value;

    const testName = /^\s+$/.test(name);
    const testEmail = /^\s+$/.test(email);
    const testPassword = /^\s+$/.test(password);

    if (testName === false && testEmail === false && testPassword === false) {
      this.authService.onSignup(name, email, password);
      this.userNameControl.reset();
      this.userEmailControl.reset();
      this.userPasswordControl.reset();
      alert('Dodano nowego klienta');
    } else if (testName === true) {
      alert('Nie można dodać pustego imienia i nazwiska');
    } else if (testEmail === true) {
      alert('Nie można dodać pustego emaila');
    } else if (testPassword === true) {
      alert('Nie można dodać pustego hasła');
    }
  }
}
