import { BarberServiceService } from "./../barber-service.service";
import { Barber } from "./../../model/barber";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-barber-list",
  templateUrl: "./barber-list.component.html",
  styleUrls: ["./barber-list.component.css"]
})
export class BarberListComponent implements OnInit {
  barberList: Array<Barber>;
  id: string
  constructor(private barberService: BarberServiceService, private router: Router) { }

  ngOnInit() {
    this.barberService.getBarbers().then(x => {
      this.barberList = x
      console.log(x)
    })
  }

  onEdit(id) {
    this.router.navigateByUrl(`/barber/edit/${id}`);
  }
  goTo() {
    if (this.id) {
      this.router.navigateByUrl(`barber/edit/${this.id}`)
    } else {
      this.router.navigateByUrl('barber/add')
    }
  }
}
