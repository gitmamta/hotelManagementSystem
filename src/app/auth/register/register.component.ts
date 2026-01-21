import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  registerForm: FormGroup;
  roles = ['customer', 'admin'];
  error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      role: new FormControl('customer', Validators.required)
    });
  }

  onRegisterClicked() {
    if (this.registerForm.invalid) {
      this.error = 'Please fill in all fields correctly';
      return;
    }

    const { username, password, role } = this.registerForm.value;

    this.authService.register(username, password, role).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => this.error = err.error.msg || 'Registration failed'
    });
  }
}
