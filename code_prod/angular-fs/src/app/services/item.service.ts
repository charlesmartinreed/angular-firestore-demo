// collection represents the db, document represents singular db entries

import { Item } from "../models/Item";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>; //think of an observable as a data stream

  // inject the angular firestore as 'afs'
  constructor(public afs: AngularFirestore) {
    // valueChanges returns our collection as an observable
    this.items = this.afs.collection("items").valueChanges();
  }

  getItems() {
    return this.items;
  }
}
