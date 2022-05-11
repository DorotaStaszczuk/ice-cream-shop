import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { arrayUnion, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { map } from 'rxjs';
import { User } from 'src/app/shared/models';
import { OrderData } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  userName = '';
  role = '';

  constructor(private db: AngularFirestore, private store: Store<AppState>) {}

  public getAllClients() {
    return this.db
      .collection<User>('users')
      .valueChanges()
      .pipe(map((users) => users.filter((user) => user.role === 'client')));
  }

  public getUserData(uid: string) {
    return this.db.doc<User>(`users/${uid}`).valueChanges();
  }

  public getIcemanData() {
    return this.db
      .doc<User>(`users/g73q2id76nXTiJWO1jizQyDLfMg2`)
      .valueChanges();
  }

  public addNewAmount(amName: string, amCapacity: string) {
    const ref = doc(getFirestore(), 'users', 'g73q2id76nXTiJWO1jizQyDLfMg2');
    updateDoc(ref, {
      amounts: arrayUnion({ amountName: amName, amountCapacity: amCapacity }),
    });
  }

  public addNewFlavor(flName: string) {
    const ref = doc(getFirestore(), 'users', 'g73q2id76nXTiJWO1jizQyDLfMg2');
    updateDoc(ref, {
      flavors: arrayUnion(flName),
    });
  }

  public addNewFavoriteFlavor(flName: string, uid: string) {
    const ref = doc(getFirestore(), 'users', uid);
    updateDoc(ref, {
      favoriteFlavors: arrayUnion(flName),
    });
  }

  public addNewOrder(uid: string, order: OrderData) {
    const newDate = new Date();
    const orderDate = newDate.toLocaleDateString();
    const ref = doc(getFirestore(), 'users', uid);
    updateDoc(ref, {
      orders: arrayUnion({
        date: orderDate,
        flavorName: order.flavorName,
        amountCapacity: order.amountCapacity,
        quantity: order.quantity,
      }),
    });
  }
}
