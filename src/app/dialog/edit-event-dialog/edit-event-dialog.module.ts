import {NgModule} from '@angular/core';
import {EditEventDialogComponent} from "./edit-event-dialog.component";

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";
import {provideNativeDateAdapter} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [EditEventDialogComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [
    provideNativeDateAdapter()
  ],
  exports: [EditEventDialogComponent]
})
export class EditEventDialogModule {
}
