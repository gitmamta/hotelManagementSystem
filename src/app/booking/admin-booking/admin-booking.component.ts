import { Component } from '@angular/core';
import { BookingService } from 'src/services/booking.service';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css'],
})
export class AdminBookingComponent {
  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getAllbookings().subscribe((data) => {
      this.bookings = data;
    });
  }
  confirmBooking(booking: any) {
  this.bookingService.patchDataById(booking._id, { confirmed: true }).subscribe({
    next: (updatedBooking) => {
      booking.confirmed = true; // update the UI
      alert('Booking confirmed!');
    },
    error: (err) => console.error('Error confirming booking', err),
  });
}

}
