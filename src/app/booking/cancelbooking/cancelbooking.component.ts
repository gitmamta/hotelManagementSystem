import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/services/booking.service';
import { Booking } from 'src/app/models/booking.model';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css'],
})
export class CancelbookingComponent implements OnInit {
  registerForm!: FormGroup;
  bookingId!: string;
  data!: Booking;

  constructor(private route: ActivatedRoute, private booking: BookingService) {}

  ngOnInit(): void {
    // Get booking ID from route
    this.bookingId = this.route.snapshot.paramMap.get('id')!;

    // Fetch booking data
    this.booking.getDataById(this.bookingId).subscribe((data: Booking) => {
      this.data = data;

      
      this.registerForm = new FormGroup({
        roomId: new FormControl({ value: data.roomId, disabled: false }), 
        userId: new FormControl({ value: data.userId, disabled: false }), 
        username: new FormControl({ value: data.username, disabled: true }),
        email: new FormControl({ value: data.email, disabled: true }),
        checkInDate: new FormControl({ value: data.checkInDate, disabled: true }),
        checkOutDate: new FormControl({ value: data.checkOutDate, disabled: true }),
        status: new FormControl(data.status),
      });
    });
  }

  cancelBooking() {
    
   const updateData = { status: 'cancelled' }; 
    this.booking.cancelBooking(this.bookingId).subscribe({
      next: (res) => {
        alert('Booking cancelled successfully!');
        this.registerForm.patchValue({ status: 'cancelled' });
      },
      error: (err) => {
        console.error(err);
        alert('Failed to cancel booking.');
      },
    });
  }
}
