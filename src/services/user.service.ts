import { Injectable } from "@angular/core";
import{User} from "../utils/dataUser";
@Injectable({
    providedIn:"root"
})
export class UserService{

Userdata=[new User("mamta","0208","admin"),
    new User("priya","0911","user")
]

}
