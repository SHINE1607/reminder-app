import { Component, OnInit } from '@angular/core';
import { ReminderService }   from '../shared/reminder.service';
@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  reminder;
  constructor(private remServ : ReminderService) { }

  ngOnInit() {
    this.reminder = this.remServ.timeForReminder;
  }

}
