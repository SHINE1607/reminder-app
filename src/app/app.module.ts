import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';


import { ReminderService } from './shared/reminder.service'  
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { UpdateComponent } from './update/update.component';
import { NotifyComponent } from './notify/notify.component' 
 

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CreateComponent,
    ViewComponent,
    UpdateComponent,
    NotifyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatMomentDateModule,
    AmazingTimePickerModule,
    MatTableModule,
    CdkTableModule
  ],
  providers: [ReminderService],
  bootstrap: [AppComponent],
  entryComponents : [ NotifyComponent ]
})
export class AppModule { }
