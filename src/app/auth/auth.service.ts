import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { UserState } from '../store/user/user.state';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { tap } from 'rxjs';
import { AuthActions } from '../store/auth';
import { UserActions } from '../store/user/user.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userState: any;
  uid = '';
  email = '';

  constructor(
    public db: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    public router: Router,
    private store: Store<AppState>
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  public onLogin(email: string, password: string) {
    this.email = email;
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user) {
          this.uid = result.user.uid;
          this.store.dispatch(AuthActions.setAuthenticated());
          this.router.navigate(['orders']);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Nieprawidłowe hasło');
        } else if (errorCode === 'auth/invalid-email') {
          alert('Nieprawidłowy email');
        } else if (errorCode === 'auth/user-not-found') {
          alert('Nie znaleziono użytkownika');
        } else {
          alert(errorMessage);
        }
      });
  }

  public onLogout() {
    return this.angularFireAuth
      .signOut()
      .then(() => {
        this.store.dispatch(AuthActions.setNotAuthenticated());
        this.store.dispatch(UserActions.resetUser());
        localStorage.removeItem('user');
        this.router.navigate(['login']);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  public onSignup(usrName: string, email: string, password: string) {
    return this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const uid = result.user?.uid;
        this.db
          .collection('users')
          .doc(uid)
          .set({ userName: usrName, role: 'client' });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  setUserData(uid: string, email: string) {
    return this.db
      .doc<UserState>(`users/${uid}`)
      .valueChanges()
      .pipe(
        tap((user) => {
          if (user) {
            this.store.dispatch(
              UserActions.setUserData({
                userName: user.userName,
                role: user.role,
                uid: uid,
                userEmail: email,
              })
            );
          }
        })
      );
  }
}
