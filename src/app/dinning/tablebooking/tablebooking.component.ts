import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tableService } from 'src/services/table.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-tablebooking',
  templateUrl: './tablebooking.component.html',
  styleUrls: ['./tablebooking.component.css']
})
export class TablebookingComponent implements OnInit{
  registerForm: FormGroup | any;
  constructor(private http: HttpClient,private table:tableService) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phoneNo: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      time: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      guest: new FormControl('', [
        Validators.required,
        Validators.min(2),
        Validators.max(50),
      ]),
      specialRequest:new FormControl('',[Validators.required]),
      
      
    });
  }
  submitBooking() {
    console.log(this.registerForm.value);
  

    this.http
      .post(`${environment.apiUrl}/api/tableBookings`,this.registerForm.value)
      .subscribe((response) => {
        console.log('Booking saved:', response);
        alert('Booking submitted successfully!');
      });
    this.registerForm.reset();
  }
}



