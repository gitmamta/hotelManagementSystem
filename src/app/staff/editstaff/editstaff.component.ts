import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StaffService } from 'src/services/staff.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editstaff',
  templateUrl: './editstaff.component.html',
  styleUrls: ['./editstaff.component.css'],
})
export class EditstaffComponent {
  registerForm!: FormGroup;
  staffName: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),

      staffName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      role: new FormControl('', [Validators.required]),
    });
  }
  submitBooking() {
    if (this.registerForm.valid) {
     
      const staffId = this.route.snapshot.paramMap.get('id');
       const updatedStaff = this.registerForm.getRawValue();

      if (staffId) {
        // Send PUT request to update the staff data
        this.http
          .put(`http://localhost:3000/staff/${staffId}`, updatedStaff)
          .subscribe((response) => {
            console.log('Staff updated:', response);
            alert('Staff updated successfully!');
            // Optionally, navigate back or elsewhere
            this.router.navigate(['/staff']);
          });
      } else {
        alert('Staff ID not found in route.');
      }
    } else {
      alert('Form is invalid!');
    }
  }
}
