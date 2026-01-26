import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/services/booking.service';

@Component({
  selector: 'app-editbooking',
  templateUrl: './editbooking.component.html',
  styleUrls: ['./editbooking.component.css'],
})
export class EditbookingComponent implements OnInit {
  registerForm!: FormGroup;
  bookingId: string | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    // ✅ Initialize form first
    this.registerForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      roomId: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      checkInDate: new FormControl('', Validators.required),
      checkOutDate: new FormControl('', Validators.required),
      guest: new FormControl('', [
        Validators.required,
        Validators.min(2),
        Validators.max(50),
      ]),
      bookingType: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
    });

    // ✅ Safely read route param
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('Booking ID from route:', id);

      if (!id) {
        alert('Invalid booking ID');
        this.router.navigate(['/bookings']);
        return;
      }

      this.bookingId = id;
      this.fetchBooking(id);
    });
  }

  // ✅ Fetch booking data
  fetchBooking(id: string): void {
    this.bookingService.getDataById(id).subscribe({
      next: (data: any) => {
        console.log('Booking fetched:', data);
        this.registerForm.patchValue(data);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching booking:', err);
        alert('Failed to load booking details');
        this.router.navigate(['/bookings']);
      },
    });
  }

  // ✅ Submit updated booking
  submitBooking(): void {
    if (!this.bookingId) {
      alert('Booking ID missing');
      return;
    }

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      alert('Please fix the form errors');
      return;
    }

    const updatedBooking = this.registerForm.value;

    this.bookingService
      .patchDataById(this.bookingId, updatedBooking)
      .subscribe({
        next: () => {
          alert('Booking updated successfully!');
          this.router.navigate(['/bookings']);
        },
        error: (err) => {
          console.error('Error updating booking:', err);
          alert('Failed to update booking');
        },
      });
  }
}
