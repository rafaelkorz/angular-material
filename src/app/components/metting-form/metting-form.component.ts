import { MeetingService } from './../../service/meeting.service.ts.service';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-metting-form',
  templateUrl: './metting-form.component.html',
  styleUrls: ['./metting-form.component.css']
})
export class MettingFormComponent implements OnInit {

  public meetingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MettingFormComponent>,
    private service: MeetingService
    // @Optional @Inject(MAT_DIALOG_DATA) public data: string {}
  ) { }

  ngOnInit(): void {
    this.meetingForm = this.fb.group({
      id: [null],
      meetingName: ['', Validators.required],
      meetingSubject: ['', Validators.required],
      meetingResponsible: ['', Validators.required],
      meetingDate: ['', Validators.required],
      meetingTime: ['', Validators.required],
    })
  }

  save(){
    if(this.meetingForm.value.id == null){
      this.create();
    } else {
      this.update();
    }
  }

  create(){
    this.service.insert(this.meetingForm.value).subscribe(result => {
      console.log('Resp Post', result);
    },
    err => {
      console.log('Error ', err);
    });
    this.dialogRef.close(true);
    this.meetingForm.reset();
    window.location.reload();
  }

  update(){
    this.service.update(this.meetingForm.value).subscribe(result => {
      console.log('Resp Post', result);
    },
    err => {
      console.log('Error ', err);
    });
    this.dialogRef.close(true);
    this.meetingForm.reset();
    window.location.reload();
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
