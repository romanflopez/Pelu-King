import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  model: any = { user: "", password: "" };
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  register() {
    this.auth.register(this.model.user, this.model.password);
  }
}
