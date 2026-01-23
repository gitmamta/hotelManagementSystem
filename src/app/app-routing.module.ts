import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomsComponent } from './rooms/rooms.component';

import { ContactComponent } from './contact/contact.component';

import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './activeguard.guard';

import { adminGuard } from 'adminguard.guard';
import { userGuard } from 'userguard.guard';

const routes: Routes = [





  
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate:[adminGuard],
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'auth/login' }, // fallback

  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
    canActivate:[authGuard],
  },

  {
    path: 'rooms',
    component: RoomsComponent,
    canActivate:[authGuard],
  },
  {
    path: 'rooms/:id',
    component: RoomsComponent,
    canActivate:[authGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate:[authGuard],
  },

  {
    path: 'staff',
    loadChildren: () =>
      import('./staff/staff.module').then((m) => m.StaffModule),
    canActivate:[authGuard],
  },
  {
    path: 'dinning',
    loadChildren: () =>
      import('./dinning/dinning.module').then((m) => m.DinningModule),
    canActivate:[authGuard],
  },
  {
    path: 'meeting',
    loadChildren: () =>
      import('./meeting/meeting.module').then((m) => m.MeetingModule),
    canActivate:[authGuard],
  },
  { path: '**', redirectTo: 'booking' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
