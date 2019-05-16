import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reminder } from '../../../server/model/reminder';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
//to share  data between the unrelated components


@Injectable()


  export class ReminderService{ 
    ReminderService: string;
    currentReminderEdit;
    
      constructor(private http: HttpClient){
        
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
        this.initialCheck();
      }

      public initialCheck(){
        var date = new Date();
        var hour = date.getHours();
        
      }
      

    
}