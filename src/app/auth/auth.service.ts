import { Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { auth } from "firebase/app";
import { User } from "firebase";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService implements OnInit {
  user: User;
  errorMessage: Observable<any>;
  successMessage: string;

  constructor(public afAuth: AngularFireAuth, public router: Router) {}

  ngOnInit() {
    this.setUserLocalStorange();
    this.getUser();
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      res => {
        this.successMessage = "Your account has been created";
      },
      err => {
        this.errorMessage = err.message;
        this.successMessage = "";
      }
    );
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem("user");
    this.router.navigate(["login"]);
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null;
  }

  setUserLocalStorange() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(this.user));
      } else {
        localStorage.setItem("user", null);
      }
    });
  }
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
