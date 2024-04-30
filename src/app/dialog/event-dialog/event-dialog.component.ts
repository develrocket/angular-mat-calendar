import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from '@angular/material/dialog';
import {AddEventDialogComponent} from '../add-event-dialog/add-event-dialog.component';
import {EditEventDialogComponent} from '../edit-event-dialog/edit-event-dialog.component';
import {DialogService} from "../../dialog.service";
import {ConfirmDialogData} from "../confirm-dialog/confirm-dialog.component";
import { of } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import {CommonModule} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: "app-event-dialog",
  templateUrl: "./event-dialog.component.html",
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatDialogClose,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  styleUrls: ["./event-dialog.component.scss"]
})
export class EventDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogService: DialogService
  ) {
  }

  ngOnInit() {
  }

  addEvent() {
    this.dialogService.openDialog(AddEventDialogComponent, this.data).subscribe(result => {
      if (result.event) {
        this.data.events.push(result.event);
      }
    });
  }

  closeEvent() {
    this.dialogRef.close({});
  }

  editEvent(data: any) {
    this.dialogService.openDialog(EditEventDialogComponent, data).subscribe(_ => {
    })
  }

  deleteEvent(data: any) {
    const dialogData: ConfirmDialogData = {
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this item?'
    };

    this.dialogService.showConfirm(dialogData).subscribe(result => {
      if (result === false) {
        // User canceled
      } else {
        of(this.data.events)
          .pipe(
            filter((obj) => obj.id !== data.id),
            toArray()
          )
          .subscribe(filteredItems => {
            console.log('filtered-items:', filteredItems);
            this.data.events = filteredItems;
          });
      }
    })
  }
}
