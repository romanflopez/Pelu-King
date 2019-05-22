import { HomeService } from "./home.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  customersList: Array<any>;
  paymentList: Array<number>;
  totalPayment: number = 0;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.get();
  }
  get() {
    this.homeService.getCustomers().then(result => {
      let total = 0;
      this.customersList = result;
      // this.customersList.forEach(element => {
      //   element.payload.doc.data().paymentTest.forEach(e => {
      //     total += e.price;
      //   });
      // });
      // this.totalPayment = total;
    });
  }
}
