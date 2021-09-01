import { MettingFormComponent } from './../metting-form/metting-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addMeeting() {
    const dialogRef = this.dialog.open(MettingFormComponent, {
      height: '500px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed ');
    });
  }


}
