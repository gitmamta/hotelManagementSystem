import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { EditstaffComponent } from './editstaff/editstaff.component';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';
import { authGuard } from '../activeguard.guard';
import { adminGuard } from 'adminguard.guard';

const routes: Routes = [
  {
    path: '',
    component: AddstaffComponent,
     canActivate:[authGuard]
    

  },
  { path: 'editstaff/:id', component: EditstaffComponent ,
     canActivate:[authGuard]
   
  },

  {
    path: 'edit',
    component: EditstaffComponent,
     canActivate:[authGuard]
  },
  {
    path: 'edit/:id',
    component: EditstaffComponent,
     canActivate:[authGuard]
  },
  {
    path: 'view',
    component: ViewstaffComponent,
     canActivate:[authGuard]
  },
  { path: 'view/:id', component: ViewstaffComponent,
     canActivate:[authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
