import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor(private db: AngularFirestore) {}

  getCustomers() {
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection("/customers")
        .snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        });
    });
  }
}
