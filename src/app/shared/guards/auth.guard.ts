import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(): Observable<boolean> {
    return this.store
      .select((state) => state.auth.isAuthenticated)
      .pipe(
        map((isAuthenticated) => {
          if (isAuthenticated) {
            return true;
          } else {
            this.router.navigate(['login']);
            return false;
          }
        })
      );
  }
}
