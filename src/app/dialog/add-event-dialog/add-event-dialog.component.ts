import {Component, Inject, OnInit} from '@angular/core';
import {hours} from '../../calendar/Localization/hours'
import {minutes} from '../../calendar/Localization/minutes'
import {IEventData} from "../../calendar/Interface/IEventData";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EventDialogComponent} from '../event-dialog/event-dialog.component';
import {colours} from "../../calendar/Localization/colours";

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent implements OnInit {

  startDate: any;
  startHours: any;
  startMinutes: any;
  hours: any;
  minutes: any;
  colours: any;
  newEvent = {} as IEventData;

  constructor(
    public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this.hours = hours;
    this.minutes = minutes;
    this.colours = colours;
  }

  btn_SaveClick() {

    this.startDate = new Date(this.data.year, this.data.month, this.data.day)
    this.startDate.setHours(this.startDate.getHours() + this.startHours)
    this.startDate.setMinutes(this.startDate.getMinutes() + this.startMinutes)

    this.newEvent.startDate = this.startDate;

    this.dialogRef.close({event: this.newEvent});

  }

}
