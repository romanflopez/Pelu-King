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
  customerName: string = "";
  loading: boolean = false;
  constructor(
    private customerService: CustomersServiceService,
    private router: Router,
    private snack: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loading = true
    this.get();
  }

  findeCustomer() {
    if (this.customerName == '') {
      this.get()
    } else {
      this.customerService.getCustomerByName(this.customerName).subscribe(x => {
        this.customersList = x
      })
    }
  }
  get() {
    this.customerService.getCustomers().then(result => {
      this.customersList = result;
      this.loading = false
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
}
