import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-delet-dialog-error",
  templateUrl: "./delete-user.dialog.component.html",
  styleUrls: ["./delete-user.dialog.component.css"]
})
export class DeletUserDialog implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}
}
