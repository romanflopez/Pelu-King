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
  cutList: Array<number>;
  amount: number = null
  date: Timestamp<Date>
  cutSelected = "";
  cutNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(
    private customerService: CustomersServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private barberService: BarberServiceService
  ) { }

  ngOnInit() {
    this.customerId = this.route.snapshot.paramMap.get("id");
    this.customerService.getCustomerById(this.customerId).subscribe(x => {
      this.cutList = x.numberOfCuts;
      this.cutSelected = x.cutNumber;
    });
    this.getBarbers()
  }

  add() {

    this.customerService.addCut(this.barberId, this.amount, this.customerId, this.date).then(
      x => {
        this.router.navigateByUrl('/customer-list')
      }
    )
    // console.log(this.barberId, this.amount, this.date, this.cutSelected, this.customerId)
  }

  getBarbers() {
    this.barberService.getBarbers().then(x => {
      this.barberList = x

    })
  }


}
