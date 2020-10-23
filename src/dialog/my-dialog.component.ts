/*
 *
 * Licensed Materials - Property of IBM
 *
 * Supply Chain - UI Hub
 * (C) Copyright IBM Corp. 2019, 2020 All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *
 */
import { Component, ElementRef } from "@angular/core";
import { Dialog, ElementService } from "carbon-components-angular";

@Component({
  selector: "my-dialog",
  templateUrl: "./my-dialog.component.html",
  styleUrls: ["./my-dialog.component.scss"]
})
export class MyDialogComponent extends Dialog {
  constructor(
    protected elementRef: ElementRef,
    protected elementService: ElementService
  ) {
    super(elementRef, elementService);
  }
}
