import { Injectable } from '@angular/core';
import { User } from '../utils/dataUser';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  Userdata = [
    new User('mamta', '0208', 'admin'),
    new User('priya', '0911', 'user'),
  ];
//add a new user
  registerUser(user:User){
    const exists=this.Userdata.some(u=>u.username===user.username);//check for already exists
    if(exists){

        return false; //failed registration if exists
    }
    this.Userdata.push(user);
    return true;
  }
}
