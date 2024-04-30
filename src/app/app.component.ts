import {Component} from '@angular/core';
import {IEventData} from "./calendar/Interface/IEventData";
import {EventDialogComponent} from "./dialog/event-dialog/event-dialog.component";
import {DialogService} from "./dialog.service";
import {MatButtonModule} from "@angular/material/button";
import {CalendarComponent} from "./calendar/calendar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    CalendarComponent,
    RouterOutlet
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calendar-test';
  language: string = 'en';
  dataArray: IEventData[] = [];

  constructor(private dialogService: DialogService) {
  }

  addEvent(event: any) {
    alert(event);
  }

  dayEvents(event: any) {
  }

  selectDay(event: any) {
    if (event.events) {
      this.dialogService.openDialog(EventDialogComponent, event).subscribe(_ => {
      });
    }
  }
}
