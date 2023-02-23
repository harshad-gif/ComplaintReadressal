// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
// import { Observable,of } from 'rxjs';
// import { User } from '../model/user.model';
// import { UserService } from './user.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserResolverService  implements Resolve<User>{

//   constructor(
//     private userSer:UserService
//   ) { }
//   resolve(
//     route: ActivatedRouteSnapshot, state: RouterStateSnapshot
//     ):Observable<User>{
//     const id:any = route.paramMap.get("userName");

//     if(id){

//       return this.userSer.getUser(id)
     
      
//     }else{

//       return of(this.getUser())
//     }

//   }

//   getUser(){
//     return{
   
//       userName:'',
//       userFirstName:'',
//       userLastName:'',
//       userPassword:''
       
      
//     }
//   }
// }
