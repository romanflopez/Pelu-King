import { Injectable, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Timestamp } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomersServiceService implements OnInit {
  constructor(private db: AngularFirestore) { }

  ngOnInit() { }

  createUser(model) {
    return this.db.collection("customers").add({
      firstName: model.firstName,
      lastName: model.lastName,
      phone: parseInt(model.phone)
    });
  }

  getBarbers() {
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection("/barbers")
        .snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        });
    });
  }
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
  getCustomerById(id) {
    return this.db
      .collection("customers")
      .doc(id)
      .valueChanges();
  }
  updateUserById(id, model) {
    return this.db
      .collection("customers")
      .doc(id)
      .set({
        firstName: model.firstName,
        lastName: model.lastName,
        phone: parseInt(model.phone)
      });
  }
  deleteUser(id) {
    return this.db
      .collection("customers")
      .doc(id)
      .delete();
  }

  addCut(barber: string, amount: number, customer: string, date: Timestamp<Date>) {
    return this.db
      .collection('payments').add({
        amount: amount,
        barberId: barber,
        customerId: customer,
        date: date
      })
  }

  getCustomerByName(nameToSearch: string) {
    return this.db.collection('customers', ref => ref.where('firstName', '==', nameToSearch)).snapshotChanges()
  }
  getClientPayments(customerId: string) {
    console.log(customerId)
    return this.db.collection('payments', ref => ref.where('customerId', '==', customerId)).valueChanges()
  }
}
