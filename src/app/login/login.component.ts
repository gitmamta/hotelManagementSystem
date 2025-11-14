import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('username') userName!: ElementRef;
  @ViewChild('password') password!: ElementRef;
 
  
  //Dependency injection
  constructor(private authService: AuthService,private router:Router) {}
    
    // const user = this.authService.login(this.userName, this.password);
    

    
    onLoginClicked() {
    let userName = this.userName.nativeElement.value;
    let password = this.password.nativeElement.value;
    let user = this.authService.login(userName, password);
    if (user) {
      alert(`Welcome:${user.username}`);
      this.router.navigate(['/booking']);
    } else {
      alert('No user found');
    }

  }

}
  

