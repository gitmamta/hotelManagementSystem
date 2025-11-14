import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: boolean = false;
  currentUser: any = null;
  userService: UserService = inject(UserService);
  login(userName: any, password: any) {
    let user = this.userService.Userdata.find(
      (e) => e.username == userName && e.password == password
    );

    if (user == undefined) {
      this.isLogged = false;
      this.currentUser = null;
      return null;
    }
    // else {
    //   this.isLogged = true;
    // }
    this.isLogged = true;
    this.currentUser = user;
    return user;
  }
  // logout
  logout() {
    this.isLogged = false;
  }
  // isAuthenticated
  isAuthenticated() {
    return this.isLogged;
  }

  getRole() {
    return this.currentUser?.role;
  }
}
