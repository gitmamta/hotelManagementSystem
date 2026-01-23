import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllbookingComponent } from './allbooking/allbooking.component';
import { EditbookingComponent } from './editbooking/editbooking.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { authGuard } from '../activeguard.guard';
import { userGuard } from 'userguard.guard';

const routes: Routes = [
  
  {
    path: '',
    component:AllbookingComponent,
    canActivate:[authGuard]
  },
  
  
  {
    path:'edit',
    component:EditbookingComponent,
    canActivate:[authGuard]
  },
  {
    path:'edit/:id',
    component:EditbookingComponent,
    canActivate:[authGuard]
  },


  {
    path:'cancel',
    component:CancelbookingComponent,
    canActivate:[authGuard]
  },
  {
    path:'cancel/:id',
    component:CancelbookingComponent,
    canActivate:[authGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
