import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RoomsComponent } from './rooms/rooms.component';

import { ContactComponent } from './contact/contact.component';

import { LoginComponent } from './login/login.component';
import { activeGuard } from './activeguard.guard';
import { AdminComponent } from './admin/admin.component';
import { adminGuard } from 'adminguard.guard';
import { userGuard } from 'userguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'rooms',
    component: RoomsComponent,
    // canActivate:[userGuard],
  },
  {
    path: 'rooms/:id',
    component: RoomsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
  },

  {
    path: 'staff',
    loadChildren: () =>
      import('./staff/staff.module').then((m) => m.StaffModule),
  },
  {
    path: 'dinning',
    loadChildren: () =>
      import('./dinning/dinning.module').then((m) => m.DinningModule),
  },
  {
    path: 'meeting',
    loadChildren: () =>
      import('./meeting/meeting.module').then((m) => m.MeetingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
