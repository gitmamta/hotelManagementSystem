import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';
import { EditstaffComponent } from './editstaff/editstaff.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewstaffComponent,
    EditstaffComponent,
    AddstaffComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    AddstaffComponent,
    EditstaffComponent,
    ViewstaffComponent,
  ]
})
export class StaffModule { }
