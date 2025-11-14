import { Component,ElementRef,ViewChild } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  @ViewChild('username') userName!: ElementRef;
    @ViewChild('password') password!: ElementRef;
   
    
    //Dependency injection
    constructor(private authService: AuthService,private router:Router) {}
      
      // const user = this.authService.login(this.userName, this.password);
      
  
      
      onLoginClicked() {
      let userName = this.userName.nativeElement.value;
      let password = this.password.nativeElement.value;
      let admin = this.authService.login(userName, password);
      if (admin) {
        alert(`Welcome:${admin.username}`);
      } else {
        alert('No user found');
      }
    }

}
