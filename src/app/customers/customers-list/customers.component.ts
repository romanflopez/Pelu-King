import { Component, OnInit } from "@angular/core";
import { CustomersServiceService } from "../customers-service.service";
import { Router } from "@angular/router";
import { MatDialog, MatSnackBar } from "@angular/material";
import { DeletUserDialog } from "src/app/dialogs/delete-user.dialog.component";
import { AngularFirestoreCollection } from "@angular/fire/firestore";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  customersList: any;
  customerRef: AngularFirestoreCollection;
  customerByName: string = "";
  constructor(
    private customerService: CustomersServiceService,
    private router: Router,
    private snack: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getCustomerByName()
    this.get();
  }


  get() {
    this.customerService.getCustomers().then(result => {
      this.customersList = result;
    });
  }

  onEdit(id) {
    this.router.navigateByUrl(`/customers/edit/${id}`);
  }
  goTo() {
    this.router.navigateByUrl("/customers/add");
  }
  onAddPayment(id) {
    this.router.navigateByUrl(`/customer/cut/${id}`);
  }

  onDeleteCustomer(id, firstName, lastName, i) {
    this.dialog
      .open(DeletUserDialog, {
        panelClass: "delete-customer-dialog",

        data: {
          name: firstName,
          lastname: lastName
        }
      })
      .afterClosed()
      .subscribe(x => {
        if (x) {
          this.customerService.deleteUser(id).then(x => {
            this.customersList.splice(i.payload.newIndex, 1);
          });
        }
      });
  }

  getCustomerByName() {
    this.customerService.getCustomerByName(this.customerByName).subscribe(x => {
      console.log(x)
      // this.customersList = x
    })

  }
}
