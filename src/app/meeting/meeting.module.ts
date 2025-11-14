import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingRoutingModule } from './meeting-routing.module';
import { MeetingareaComponent } from './meetingarea/meetingarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MeetingareaComponent
  ],
  imports: [
    CommonModule,
    MeetingRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class MeetingModule { }
