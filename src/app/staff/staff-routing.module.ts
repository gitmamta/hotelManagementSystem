import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { EditstaffComponent } from './editstaff/editstaff.component';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';
import { activeGuard } from '../activeguard.guard';
import { adminGuard } from 'adminguard.guard';

const routes: Routes = [
  {
    path: '',
    component: AddstaffComponent,
     canActivate:[adminGuard]
    

  },
  { path: 'editstaff/:id', component: EditstaffComponent 
   
  },

  {
    path: 'edit',
    component: EditstaffComponent,
  },
  {
    path: 'edit/:id',
    component: EditstaffComponent,
  },
  {
    path: 'view',
    component: ViewstaffComponent,
  },
  { path: 'view/:id', component: ViewstaffComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
