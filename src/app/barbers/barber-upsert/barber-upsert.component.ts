import { BarberServiceService } from './../barber-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-barber-upsert',
  templateUrl: './barber-upsert.component.html',
  styleUrls: ['./barber-upsert.component.css']
})
export class BarberUpsertComponent implements OnInit {
  uid: any;
  model: any = { firstName: "", lastName: "" };
  constructor(
    private barberService: BarberServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.uid = this.route.snapshot.paramMap.get("id");
    if (this.uid) {
      this.barberService.getBarberById(this.uid).subscribe(x => {
        this.model.firstName = x.firstName;
        this.model.lastName = x.lastName;
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
    this.barberService.createUser(this.model).then(_ => {
      this.snackBar.open("Se agrego con exito", "", { duration: 3000 });
      this.router.navigateByUrl("/barber-list");
    });
  }

  update(id) {
    this.barberService.updateUserById(id, this.model).then(_ => {
      this.snackBar.open("Se edito con exito", "", { duration: 2000 });
      this.router.navigateByUrl("/barber-list");
    });
  }

}
