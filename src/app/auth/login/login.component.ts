import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  onLoginClicked() {
    if (this.loginForm.invalid) {
      this.error ='Please fill in all fields';
      return;
    }

    const { username, password } = this.loginForm.value;

    console.log('Login function called!', this.loginForm.value);

    this.authService.login(username, password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err: any) => (this.error = err.error.msg || 'Login failed'),
    });
  }
}
