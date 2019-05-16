import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reminder } from '../../../server/model/reminder';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotifyComponent } from '../notify/notify.component';
//to share  data between the unrelated components


@Injectable()


  export class ReminderService{ 
    ReminderService: string;
    currentReminderEdit;
    timeForReminder;
      constructor(private http: HttpClient, private dialog : MatDialog){
        
      }
      
      
      public getReminders() : Observable<Reminder[]>{
        //making a request for the rental page 
        //returing the observable 
        return  <Observable<Reminder[]>> this.http.get('/api/v1/reminder/')
  }

      public add(reminderData : any ) : Observable<any>{
        //returning the json file after validation from the server 
        return this.http.post('/api/v1/reminder/create', reminderData)

      }

      public delete(reminderId){
        // Reminder.remove({ "description": reminderId });
        
      }

      public timeCheck(){
        //year check
        setTimeout(() => {
          this.finalCheck();
        }, 60000)
      }
          
      public finalCheck(){
        var RemArr1 = [];
        var RemArr2 = [];

        var date = new Date();
        var curYear = date.getFullYear();
        var curMon = date.getMonth();
        var curDay = date.getDay();
        var curHour = date.getHours();
        var curMin = date.getMinutes();
        Reminder.forEach(rem =>{
          if(rem.year == curYear){
            RemArr1.push(rem);
          }
        });
        if(RemArr1.length){
              RemArr2 = RemArr1;
              RemArr1 = [];
        
              RemArr2.forEach(rem =>{
                if(rem.month == curMon){
                  RemArr1.push(rem);
                }
              });
              if(RemArr1.length){
                RemArr2 = RemArr1;
                RemArr1 = [];
                RemArr2.forEach(rem =>{
                  if(rem.day == curDay){
                    RemArr1.push(rem);
                  }
                });
              }if(RemArr1.length){
                RemArr2 = RemArr1;
                RemArr1 = [];
                RemArr2.forEach(rem =>{
                  if(rem.hour == curHour){
                    RemArr1.push(rem);
                  }
                });
              }if(RemArr1.length){
                RemArr2 = RemArr1;
                RemArr1 = [];

              }RemArr2.forEach(rem =>{
                  if(rem.minute == curMin){
                    RemArr1.push(rem);
                  }
                });
                if (RemArr1.length){
                  this.timeForReminder = RemArr1[0];
                  this.dialog.open(NotifyComponent)
                }
            
            }
          
         
    }
          
}