import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: "app-informative-dialog",
    templateUrl: "./informative-dialog.component.html",
    styleUrls: ["./informative-dialog.component.css"]
})
export class InformativeDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


}
