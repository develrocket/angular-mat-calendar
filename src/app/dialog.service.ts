import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Observable, Subject} from 'rxjs';
import {take} from 'rxjs/operators';
import {ConfirmDialogComponent, ConfirmDialogData} from "./dialog/confirm-dialog/confirm-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  openDialog(dialog: any, event: any): Observable<any> {
    const dialogRef: MatDialogRef<any> = this.dialog.open(dialog, {
      width: '80%',
      height: '90%',
      data: event
    });

    const dialogClosed$ = new Subject<any>();

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      dialogClosed$.next(result);
      dialogClosed$.complete();
    });

    return dialogClosed$.asObservable();
  }


  showConfirm(data: ConfirmDialogData): Observable<any> {
    const dialogRef: MatDialogRef<any> = this.dialog.open(ConfirmDialogComponent, {
      width: '50%',
      height: '30%',
      data: data
    });

    const dialogClosed$ = new Subject<any>();

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      dialogClosed$.next(result);
      dialogClosed$.complete();
    });

    return dialogClosed$.asObservable();
  }
}
