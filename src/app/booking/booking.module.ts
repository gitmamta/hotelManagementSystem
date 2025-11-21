import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AllbookingComponent } from './allbooking/allbooking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { EditbookingComponent } from './editbooking/editbooking.component';
import { BookingRoutingModule } from './booking-routing.module';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';



@NgModule({
  declarations: [
    AllbookingComponent,
    CancelbookingComponent,
    EditbookingComponent,
    AdminBookingComponent
    
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookingRoutingModule,
    HttpClientModule
  ],
  exports:[
    AllbookingComponent,
    CancelbookingComponent,
    EditbookingComponent,
    AdminBookingComponent
    
  ]
})
export class BookingModule { }
