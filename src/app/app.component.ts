import { Component } from '@angular/core';
import { IEventData } from "./calendar/Interface/IEventData";
import {MatDialog} from "@angular/material/dialog";
import {EventDialogComponent} from "./dialog/event-dialog/event-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calendar-test';
  language: string = 'en';
  dataArray: IEventData[] = [];

  constructor(public dialog: MatDialog) { }

  addEvent(event: any) {
    alert(event);
  }

  dayEvents(event: any) {
  }

  selectDay(event: any) {
    console.log('select-day-event');
    if (event.events) {
      const dialogRef = this.dialog.open(EventDialogComponent, {
        width: '80%',
        height: '90%',
        data: event
      });
    }
  }
}
