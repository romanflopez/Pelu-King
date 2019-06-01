import { Timestamp } from 'rxjs';
import { BarberServiceService } from './../barbers/barber-service.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EarningService {
  constructor(private db: AngularFirestore) { }

  getPaymentByBarberId(barberId: string, startDate: Timestamp<Date>, endDate: Timestamp<Date>) {
    return this.db.collection('payments', ref => ref.where('barberId', '==', barberId).where('date', '>=', startDate).where('date', '<=', endDate)).valueChanges()
  }

}
