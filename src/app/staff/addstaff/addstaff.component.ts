import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';

@Component({

  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {
  registerForm: FormGroup | any;
  

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      staffId: new FormControl('', [Validators.required]),
     

      staffName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        
      ]),
      role:new FormControl('',[Validators.required]),
    });
  }
  submitBooking() {
    console.log(this.registerForm.value);
  

    this.http
      .post(`${environment.apiUrl}/api/staffs`, this.registerForm.value)
      .subscribe((response) => {
        console.log('staffinfo saved:', response);
        alert('staffinfo submitted successfully!');
      });
    this.registerForm.reset();
  }
}
