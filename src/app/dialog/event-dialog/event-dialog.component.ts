import {CommonModule} from "@angular/common";
import { Component, OnInit, Inject } from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { AddEventDialogComponent } from '../add-event-dialog/add-event-dialog.component';
import { EditEventDialogComponent} from '../edit-event-dialog/edit-event-dialog.component';


@Component({
  selector: "app-event-dialog",
  templateUrl: "./event-dialog.component.html",
  styleUrls: ["./event-dialog.component.scss"]
})
export class EventDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  addEvent() {
    console.log('call-add-event:', this.data);
    const dialogRef1 = this.dialog.open(AddEventDialogComponent, {
      width: '80%',
      height: '90%',
      data: this.data
    });

    dialogRef1.afterClosed().subscribe(result => {
      if (result.event) {
        this.data.events.push(result.event);
      }
    });
  }

  closeEvent() {
    this.dialogRef.close({});
  }

  editEvent(data: any) {
    const dialogRef2 = this.dialog.open(EditEventDialogComponent, {
      width: '80%',
      height: '90%',
      data: data
    });
  }

}
