import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  ButtonModule,
  DialogModule,
  CheckboxModule,
  AccordionModule,
  PlaceholderModule
} from 'carbon-components-angular';
import { MyDialogDirective } from '../dialog/my-dialog.directive';
import { MyDialogComponent } from '../dialog/my-dialog.component';
import { MyContentsComponent } from '../dialog/my-contents.component';
import { AppComponent } from './app.component';

import { FilterModule } from '@carbon/icons-angular';

@NgModule({
  declarations: [
    AppComponent,
    MyDialogDirective,
    MyDialogComponent,
    MyContentsComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DialogModule,
    CheckboxModule,
    AccordionModule,
    PlaceholderModule,
    FilterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyDialogComponent]
})
export class AppModule {}
