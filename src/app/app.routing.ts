import { CustomerCutComponent } from "./customers/customer-cut/customer-cut.component";
import { CustomersComponent } from "./customers/customers-list/customers.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CustomersUpsertComponent } from "./customers/customers-upsert/customers-upsert.component";
import { BarberListComponent } from "./barbers/barber-list/barber-list.component";
import { BarberUpsertComponent } from "./barbers/barber-upsert/barber-upsert.component";
import { EarningsListComponent } from "./earning/earnings-list/earnings-list.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "customers-list", component: CustomersComponent },
  { path: "customers/edit/:id", component: CustomersUpsertComponent },
  { path: "customers/add", component: CustomersUpsertComponent },
  { path: "customer/cut/:id", component: CustomerCutComponent },
  { path: "barber-list", component: BarberListComponent },
  { path: "barber/edit/:id", component: BarberUpsertComponent },
  { path: "barber/add", component: BarberUpsertComponent },
  { path: "earning-list", component: EarningsListComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
