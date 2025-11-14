import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeetingareaComponent } from './meetingarea/meetingarea.component';

const routes: Routes = [
  {
    path: '',
    component: MeetingareaComponent,
  },
  {
    path:'meeting/:id',
    component:MeetingareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetingRoutingModule {}
