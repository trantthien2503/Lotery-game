import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore;
  items$: Observable<any[]>;

  constructor() {
    this.firestore = inject(Firestore);
    const aCollection = collection(this.firestore, 'items');
    this.items$ = collectionData(aCollection);
  }

}
