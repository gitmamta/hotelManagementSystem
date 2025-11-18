import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-allbooking',
  templateUrl: './allbooking.component.html',
  styleUrls: ['./allbooking.component.css'],
})
export class AllbookingComponent implements OnInit {
  registerForm: FormGroup | any;
  

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
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
  }
  submitBooking() {
    console.log(this.registerForm.value);
  //   const bookingData = {
  //   ...this.registerForm.value, // all form values
  //   status: 'active'            // manually add status
  // };


    this.http
      .post(`${environment.apiUrl}/bookings`, this.registerForm.value)
      .subscribe((response) => {
        console.log('Booking saved:', response);
        alert('Booking submitted successfully!');
      });
    this.registerForm.reset();
  }
}
