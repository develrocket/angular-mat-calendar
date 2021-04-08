import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {hours} from "../../calendar/Localization/hours";
import {minutes} from "../../calendar/Localization/minutes";
import {IEventData} from "../../calendar/Interface/IEventData";
import {colours} from "../../calendar/Localization/colours";

@Component({
  selector: 'app-edit-event-dialog',
  templateUrl: './edit-event-dialog.component.html',
  styleUrls: ['./edit-event-dialog.component.scss']
})
export class EditEventDialogComponent implements OnInit {

  previousStartHours: any;
  startDate: any;
  startHours: any;
  startMinutes: any;
  title: string | undefined;
  desc: string | undefined;
  createdBy: string | undefined;
  color: string | undefined;
  hours: any;
  minutes: any;
  colours: any;
  editEvent = {} as IEventData;


  constructor(
    public dialogRef: MatDialogRef<EditEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {

    this.editEvent.startDate = this.data.startDate;
    this.editEvent.startDate.setHours(0, 0, 0, 0);

    this.editEvent.title = this.data.title;
    this.editEvent.desc = this.data.desc;
    this.editEvent.createdBy = this.data.createdBy;
    this.editEvent.color = this.data.color;
    this.hours = hours;
    this.minutes = minutes;
    this.colours = colours;
  }

  btn_SaveChangesClick() {

    this.editEvent.startDate.setHours(this.startHours, this.startMinutes);
    this.dialogRef.close(EditEventDialogComponent);

  }

}
