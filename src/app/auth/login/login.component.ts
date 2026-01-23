import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  onLoginClicked() {
  this.error = '';

  if (this.loginForm.invalid) {
    this.error = 'Please fill in all fields correctly.';
    return;
  }

  const { email, password } = this.loginForm.value;

  this.authService.login(email, password).subscribe({
    next: (res) => {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'];

      if (returnUrl && !returnUrl.includes('login')) {
        this.router.navigateByUrl(returnUrl);
      } else if (res.user.role === 'Admin') {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/booking']);
      }
    },

    error: (err) => {
      console.error('Login error:', err);
      this.error =
        err.status === 0
          ? 'Unable to connect to server.'
          : err.error?.message || 'Invalid credentials.';
    }
  });
  }
}
