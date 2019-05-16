import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';    

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { ReminderService } from '../shared/reminder.service';
import * as moment from 'moment';

import { Reminder } from '../../../server/model/reminder' 

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  reminder : Reminder;

  timeArr = [];
  Data = {
    description: "",
    year: 0,
    month: 0,
    day:0,
    hour: 0,
    minute: 0,
  }


  DateFormData = new FormGroup({
    Description: new FormControl(),
    Date: new FormControl(moment(), [Validators.required]),
    Time: new FormControl(moment())
    });

  constructor(private remsServ : ReminderService, private router: Router,private atp : AmazingTimePickerService ) { }

  ngOnInit() {
    this.reminder = this.remsServ.currentReminderEdit;
  }

  open(){
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe( time =>{
      console.log(time);
    })
  }

  formatTime(){
    return (this.DateFormData.value.Time).split(":");
  }

  prepareRawData(){
    Description: new FormControl(),
    this.Data.description = this.DateFormData.value.Description;
    this.Data.year = this.DateFormData.value.Date._i.year;
    this.Data.month = this.DateFormData.value.Date._i.month;
    this.Data.day = this.DateFormData.value.Date._i.date;
    this.Data.hour = parseInt(this.timeArr[0]);
    this.Data.minute = parseInt(this.timeArr[1]);
  }
  submit(){
    this.timeArr = this.formatTime();
    this.prepareRawData();

    this.remsServ.delete(this.reminder._id);
    this.router.navigate(['']);
    this.remsServ.add(this.Data).subscribe(
      () => {
        this.router.navigate([''])
      }
    )
    
  }

}
