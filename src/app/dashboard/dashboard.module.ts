import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingModule } from '../booking/booking.module';
import { StaffModule } from '../staff/staff.module';
import { AdmintablebookingComponent } from './admintablebooking/admintablebooking.component';

@NgModule({
  declarations: [DashboardhomeComponent, AdmintablebookingComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    BookingModule,
    StaffModule,
  ],
  exports: [DashboardhomeComponent],
})
export class DashboardModule {}
