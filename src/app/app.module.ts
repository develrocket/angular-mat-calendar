import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserModule } from '@angular/platform-browser';
import {CalendarModule} from "./calendar/calendar.module";
import {EventDialogModule} from "./dialog/event-dialog/event-dialog.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CalendarModule,
    EventDialogModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
