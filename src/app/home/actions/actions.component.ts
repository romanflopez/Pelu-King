import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-actions",
  templateUrl: "./actions.component.html",
  styleUrls: ["./actions.component.css"]
})
export class ActionsComponent implements OnInit {
  actions = [
    { name: "Clientes", path: "/customers-list", icon: "fas fa-users " },
    { name: "Barberos", path: "/barber-list", icon: "fas fa-user-secret " },
    { name: "Ganancias", path: "/earning-list", icon: "fas fa-chart-bar" }
  ];
  constructor() { }

  ngOnInit() { }
}

