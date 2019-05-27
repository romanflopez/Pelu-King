import { MatSnackBar } from '@angular/material';
import { BarberServiceService } from './../../barbers/barber-service.service';
import { Component, OnInit } from "@angular/core";
import { CustomersServiceService } from "../customers-service.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Barber } from 'src/app/model/barber';
import { Timestamp } from 'rxjs';

@Component({
  selector: "app-customer-cut",
  templateUrl: "./customer-cut.component.html",
  styleUrls: ["./customer-cut.component.css"]
})
export class CustomerCutComponent implements OnInit {
  customerId: string;
  barberList: Array<Barber>
  barberId: string
  amount: number = null
  date: Timestamp<Date>
  cutSelected = "";
  cutNumber
  constructor(
    private customerService: CustomersServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private barberService: BarberServiceService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.customerId = this.route.snapshot.paramMap.get("id");
    this.getClientQuantityPayments()
    this.customerService.getCustomerById(this.customerId).subscribe(x => {
    });
    this.getBarbers()
  }

  add() {
    this.customerService.addCut(this.barberId, this.amount, this.customerId, this.date).then(
      x => {
        this.snackBar.open("Se agrego el pago", "", { duration: 3000 });
        this.router.navigateByUrl('/customers-list')

      }
    )
    // console.log(this.barberId, this.amount, this.date, this.cutSelected, this.customerId)
  }

  getBarbers() {
    this.barberService.getBarbers().then(x => {
      this.barberList = x

    })
  }
  getClientQuantityPayments() {
    this.customerService.getClientPayments(this.customerId).subscribe(
      res => {
        this.cutNumber = res.length
      }
    )
  }

}
