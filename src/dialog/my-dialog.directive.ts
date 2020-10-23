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
import {
  Directive,
  ElementRef,
  ViewContainerRef,
  Input,
  TemplateRef
} from '@angular/core';
import {
  DialogService,
  EventService,
  DialogDirective
} from 'carbon-components-angular';
import { MyDialogComponent } from './my-dialog.component';

@Directive({
  selector: '[myDialog]',
  exportAs: 'myDialog',
  providers: [DialogService]
})
export class MyDialogDirective extends DialogDirective {
  @Input() myDialog: TemplateRef<any>;

  constructor(
    protected elementRef: ElementRef,
    protected viewContainerRef: ViewContainerRef,
    protected dialogService: DialogService,
    protected eventService: EventService
  ) {
    super(elementRef, viewContainerRef, dialogService, eventService);

    dialogService.setContext({ component: MyDialogComponent });
  }

  onDialogInit() {
    this.dialogConfig.content = this.myDialog;
  }
}
