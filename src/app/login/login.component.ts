import { AuthService } from "./../auth/auth.service";
import { Component } from "@angular/core";
import { zip } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  model: any = { username: "", password: "" };
  showError: boolean;
  constructor(private auth: AuthService, private router: Router) {}
  error: string;

  login() {
    this.auth.login(this.model.username, this.model.password).then(
      res => {
        this.auth.setUserLocalStorange();
        this.router.navigate(["home"]);
      },
      err => {
        this.error = err.message;
        this.showError = true;
      }
    );
  }
}
