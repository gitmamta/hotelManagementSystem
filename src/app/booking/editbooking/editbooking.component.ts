import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BookingService } from 'src/services/booking.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';

@Component({
  selector: 'app-editbooking',
  templateUrl: './editbooking.component.html',
  styleUrls: ['./editbooking.component.css'],
})
export class EditbookingComponent implements OnInit {
  registerForm: FormGroup | any;
  bookingId: string | null = null;

  constructor(private route:ActivatedRoute,private http: HttpClient,private booking:BookingService) {}
  ngOnInit(): void {
    this.bookingId = this.route.snapshot.paramMap.get('id')!;
    
        // Fetch booking data
        
    this.registerForm = new FormGroup({
     
      userId: new FormControl('', [Validators.required]),
      roomId: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),

      checkInDate: new FormControl('', [Validators.required]),
      checkOutDate: new FormControl('', [Validators.required]),
      guest: new FormControl('', [
        Validators.required,
        Validators.min(2),
        Validators.max(50),
      ]),
      bookingType: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
    });
  


// Fetch booking data and populate the form
    if (this.bookingId) {
      this.booking.getDataById(this.bookingId).subscribe({
        next: (data: any) => {
          console.log('Booking data fetched:', data);
          this.registerForm.patchValue(data);
        },
        error: (err) => console.error('Error fetching booking:', err),
      });
    }
  }


  
  submitBooking() {
  
    if (this.registerForm.valid && this.bookingId) {
      
      const updatedBooking = this.registerForm.value;

      this.booking.updateBookingFull(this.bookingId,updatedBooking).subscribe({
        next: (res) => {
          console.log('Booking updated:', res);
          alert('Booking updated successfully!');
          
        },
        error: (err) => {
          console.error('Error updating booking:', err);
          alert('Failed to update booking.');
        },
      });
    } else {
      alert('Form is invalid or booking ID not found!');
    }
  }

}