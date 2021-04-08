import { NgModule } from '@angular/core';
import {EventDialogComponent} from "./event-dialog.component";

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";
import {AddEventDialogModule} from "../add-event-dialog/add-event-dialog.module";
import {EditEventDialogModule} from "../edit-event-dialog/edit-event-dialog.module";

@NgModule({
  declarations: [EventDialogComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    AddEventDialogModule,
    EditEventDialogModule
  ],
  exports: [EventDialogComponent]
})
export class EventDialogModule { }
