import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class BarberServiceService {
  constructor(private db: AngularFirestore) { }
  createUser(model) {
    return this.db.collection("barbers").add({
      firstName: model.firstName,
      lastName: model.lastName,
    });
  }

  getBarbers() {
    return new Promise<any>((resolve) => {
      this.db
        .collection("/barbers")
        .snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        });
    });
  }
  getBarberById(id) {
    return this.db
      .collection("barbers")
      .doc(id)
      .valueChanges();
  }
  updateUserById(id, model) {
    return this.db
      .collection("barbers")
      .doc(id)
      .set({
        firstName: model.firstName,
        lastName: model.lastName,
      });
  }
}
