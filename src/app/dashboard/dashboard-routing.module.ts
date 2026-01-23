import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { adminGuard } from 'adminguard.guard';
import { AdminBookingComponent } from '../booking/admin-booking/admin-booking.component';
import { AddstaffComponent } from '../staff/addstaff/addstaff.component';
import { EditstaffComponent } from '../staff/editstaff/editstaff.component';
import { ViewstaffComponent } from '../staff/viewstaff/viewstaff.component';
import { AdmintablebookingComponent } from './admintablebooking/admintablebooking.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardhomeComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'adminbooking',
    component: AdminBookingComponent,
    canActivate: [adminGuard], // optional guard
  },
 
  {
    path: 'add',
    component: AddstaffComponent,
  },
  { path: 'editstaff/:id', component:EditstaffComponent,
     canActivate: [adminGuard],
   },
  

  {
    path: 'edit',
    component: EditstaffComponent,
     canActivate: [adminGuard],
  },
  {
    path: 'edit/:id',
    component: EditstaffComponent,
     canActivate: [adminGuard],
  },
  {
    path: 'view',
    component:ViewstaffComponent,
     canActivate: [adminGuard],
  },
  { path: 'view/:id', component: ViewstaffComponent,
     canActivate: [adminGuard],

  },
   {
    path: 'tableBooking',
    component:AdmintablebookingComponent,
    canActivate: [adminGuard], // optional guard
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
