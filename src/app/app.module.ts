import { AuthGuard } from './core/auth.guard';
import { DeletUserDialog } from "src/app/dialogs/delete-user.dialog.component";
import { LoginComponent } from "./login/login.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "@angular/fire";
import {
  AngularFirestoreModule,
  FirestoreSettingsToken
} from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";
import { AppRoutingModule } from "./app.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { CustomersComponent } from "./customers/customers-list/customers.component";
import { CustomersUpsertComponent } from "./customers/customers-upsert/customers-upsert.component";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import {
  MatProgressBarModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatRadioModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatSelectModule,
  MatExpansionModule,
  MatMenuModule,
  MatDialogModule
} from "@angular/material";
import { CustomerCutComponent } from './customers/customer-cut/customer-cut.component';
import { ActionsComponent } from './home/actions/actions.component';
import { BarberListComponent } from './barbers/barber-list/barber-list.component';
import { BarberUpsertComponent } from './barbers/barber-upsert/barber-upsert.component';
import { EarningsListComponent } from './earning/earnings-list/earnings-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CustomersComponent,
    CustomersUpsertComponent,
    DeletUserDialog,
    CustomerCutComponent,
    ActionsComponent,
    BarberListComponent,
    BarberUpsertComponent,
    EarningsListComponent
  ],
  entryComponents: [DeletUserDialog],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
