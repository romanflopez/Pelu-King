import { AuthService } from './../auth/auth.service';
import { HomeService } from "./home.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  loading: boolean = false
  customersList: Array<any>;
  paymentList: Array<number>;
  constructor(private homeService: HomeService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkUserRegister()
    this.loading = true
    this.get();

  }
  get() {
    this.homeService.getCustomers().then(result => {
      this.customersList = result;
      this.loading = false

    });
  }

}
