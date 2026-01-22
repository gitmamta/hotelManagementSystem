import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email  // make sure it's a real email format :contentReference[oaicite:0]{index=0}
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  onLoginClicked() {
    // First clear any previous error
    this.error = '';

    if (this.loginForm.invalid) {
      this.error = 'Please fill in all fields correctly.';
      return;
    }

    const { email, password } = this.loginForm.value;
    console.log('Attempting login with:', { email, password });

    this.authService.login(email, password).subscribe({
      next: () => {
        // Navigate to dashboard or any protected route
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        // Log the full error for debugging
        console.error('Login error:', err);

        // Show meaningful error message
        if (err.status === 0) {
          this.error = 'Unable to connect to server.';
        } else if (err.status >= 400 && err.status < 500) {
          this.error = err.error?.message || 'Invalid credentials.';
        } else {
          this.error = 'Something went wrong. Try again later.';
        }
      }
    });
  }
}
