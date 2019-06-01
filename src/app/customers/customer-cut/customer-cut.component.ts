import { MatSnackBar, MatDialog } from '@angular/material';
import { BarberServiceService } from './../../barbers/barber-service.service';
import { Component, OnInit } from "@angular/core";
import { CustomersServiceService } from "../customers-service.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Barber } from 'src/app/model/barber';
import { Timestamp, Observable } from 'rxjs';
import { InformativeDialog } from 'src/app/dialogs/informative-dialog.component';

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
  cutNumber: number
  cutNumber$: Observable<any>
  loading: boolean = false
  constructor(
    private customerService: CustomersServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private barberService: BarberServiceService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loading = true
    this.customerId = this.route.snapshot.paramMap.get("id");
    this.getClientQuantityPayments()

    this.customerService.getCustomerById(this.customerId).subscribe(x => {
    });
    this.getBarbers()


  }

  add() {
    this.customerService.addCut(this.barberId, this.amount, this.customerId, this.date).then(
      x => {
        this.router.navigateByUrl('/customers-list')
        this.snackBar.open("Se agrego el pago", "", { duration: 3000 });

      }
    )
  }

  getBarbers() {
    this.barberService.getBarbers().then(x => {
      this.barberList = x

    })
  }
  getClientQuantityPayments() {
    this.customerService.getClientPayments(this.customerId).then(
      res => {
        if (res) {
          this.cutNumber = res.length
          this.loading = false
          if (this.loading == false) {
            this.checkCutQuantity()
          }
        }
      }
    )
  }

  openInformativeDialog(cutNumber: number) {
    this.dialog
      .open(InformativeDialog, {
        panelClass: "informative-cut-dialog",
        data: {
          cutNumber: cutNumber
        }
      })

  }

  checkCutQuantity() {


  }


}
