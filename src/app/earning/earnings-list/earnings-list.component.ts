import { AuthService } from './../../auth/auth.service';
import { BarberServiceService } from './../../barbers/barber-service.service';
import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { EarningService } from '../earning.service';

@Component({
  selector: 'app-earnings-list',
  templateUrl: './earnings-list.component.html',
  styleUrls: ['./earnings-list.component.css']
})
export class EarningsListComponent implements OnInit {
  barberList: Array<string>
  totalEarning: number = 0
  paymentList: Array<any>

  loading: boolean = false
  date = { startDate: null, endDate: null, barberId: '' }
  constructor(private barberService: BarberServiceService, private earningService: EarningService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkUserRegister()
    this.getBarbers()
  }
  getBarbers() {
    this.barberService.getBarbers().then(x => {
      this.barberList = x
    })
  }
  onSubmit() {
    this.loading = true
    this.earningService.getPaymentByBarberId(this.date.barberId, this.date.startDate, this.date.endDate).subscribe(x => {
      this.paymentList = x
      this.loading = false
    })
  }
  getTotalAmount() {
    if (this.paymentList) {
      let totalAmount = 0
      this.paymentList.forEach(element => {
        totalAmount = totalAmount + element.amount
      });
      return totalAmount
    }
  }
}