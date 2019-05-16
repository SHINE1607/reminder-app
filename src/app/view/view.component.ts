import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../shared/reminder.service';
import { Reminder }  from  '../../../server/model/reminder' ;
import { Router } from '@angular/router';    



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  reminderData = [];
  constructor(private remServ : ReminderService, private router : Router) { }

  ngOnInit() {

    this.remServ.timeCheck();

    const reminderObservabele = this.remServ.getReminders();

    reminderObservabele.subscribe(
      (reminder:Reminder[]) =>{
        this.reminderData = reminder; 
        console.log(this.reminderData);
      }
    )
    
  }

  letsUpdate(reminder){
    
    this.remServ.currentReminderEdit = reminder;
    this.router.navigate(['/update'])
  }

  letsDelete(reminder){
    this.remServ.delete(reminder._id);
    this.router.navigate([''])
  }



}
