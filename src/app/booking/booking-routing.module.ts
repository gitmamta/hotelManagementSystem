import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllbookingComponent } from './allbooking/allbooking.component';
import { EditbookingComponent } from './editbooking/editbooking.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { activeGuard } from '../activeguard.guard';
import { userGuard } from 'userguard.guard';

const routes: Routes = [
  
  {
    path: '',
    component:AllbookingComponent,
    // canActivate:[userGuard]
  },
  
  
  {
    path:'edit',
    component:EditbookingComponent
  },
  {
    path:'edit/:id',
    component:EditbookingComponent
  },


  {
    path:'cancel',
    component:CancelbookingComponent
  },
  {
    path:'cancel/:id',
    component:CancelbookingComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
