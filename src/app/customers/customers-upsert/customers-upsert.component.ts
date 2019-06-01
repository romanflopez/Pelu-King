import { CustomersServiceService } from "./../customers-service.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-customers-upsert",
  templateUrl: "./customers-upsert.component.html",
  styleUrls: ["./customers-upsert.component.css"]
})
export class CustomersUpsertComponent implements OnInit {
  loading: boolean = false;
  uid: any;
  model: any = { firstName: "", lastName: "", phone: "" };
  constructor(
    private customerService: CustomersServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get("id")) {
      this.uid = this.route.snapshot.paramMap.get("id");
      this.loading = true
    }
    if (this.uid) {
      this.customerService.getCustomerById(this.uid).subscribe((x: any) => {
        this.model.firstName = x.firstName;
        this.model.lastName = x.lastName;
        this.model.phone = x.phone;
        this.loading = false
      });
    }
  }

  upsert() {
    if (this.uid) {
      this.update(this.uid);
    } else {
      this.add();
    }
  }
  add() {
    this.customerService.createUser(this.model).then(_ => {
      this.snackBar.open("Se agrego con exito", "", { duration: 3000 });
      this.router.navigateByUrl("customers-list");
    });
  }

  update(id) {
    this.customerService.updateUserById(id, this.model).then(_ => {
      this.snackBar.open("Se edito con exito", "", { duration: 2000 });
      this.router.navigateByUrl("customers-list");
    });
  }
}
