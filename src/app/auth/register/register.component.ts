import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  registerForm: FormGroup;
  error: string = '';
  roles = ['User', 'Seller', 'Admin'];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      role: new FormControl('User', Validators.required)
    });
  }

  onRegisterClicked() {
    if (this.registerForm.invalid) {
      this.error = 'Please fill in all fields correctly.';
      return;
    }

    const userData = this.registerForm.value;
    console.log('Register data:', userData);

    this.authService.register(userData).subscribe({
      next: () => this.router.navigate(['/auth/login']),
      error: (err: any) => this.error = err.error?.msg || 'Registration failed'
    });
  }
}
