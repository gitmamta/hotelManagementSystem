export class User{
    username:any;
    password:any;
    role:"admin"|"user";


    constructor(newUsername:any,newPassword:any,newRole:"admin"|"user"){

this.username=newUsername;
this.password=newPassword;
this.role=newRole;

    }

}
